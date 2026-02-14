import { withAuth } from "@/lib/auth-helper";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

function getStartOfMonthsAgo(months: number): Date {
    const date = new Date();
    date.setMonth(date.getMonth() - months);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
}

function buildChartData(leads: { status: string; updatedAt: Date }[], months: number) {
    const chartData = [];

    for (let i = months - 1; i >= 0; i--) {
        const date = new Date();
        date.setMonth(date.getMonth() - i);
        const month = date.getMonth();
        const year = date.getFullYear();

        const monthLeads = leads.filter(l => {
            const d = new Date(l.updatedAt);
            return d.getMonth() === month && d.getFullYear() === year;
        });

        chartData.push({
            month: date.toLocaleString("pt-BR", { month: "short" }),
            ganhos: monthLeads.filter(l => l.status === "GANHO").length,
            perdidos: monthLeads.filter(l => l.status === "PERDIDO").length,
        });
    }

    return chartData;
}

function countByStatus(leads: { status: string }[]) {
    return {
        total: leads.length,
        novo: leads.filter(l => l.status === "NOVO").length,
        contato: leads.filter(l => l.status === "CONTATO").length,
        qualificado: leads.filter(l => l.status === "QUALIFICADO").length,
        proposta: leads.filter(l => l.status === "PROPOSTA").length,
        negociacao: leads.filter(l => l.status === "NEGOCIACAO").length,
        ganho: leads.filter(l => l.status === "GANHO").length,
        perdido: leads.filter(l => l.status === "PERDIDO").length,
    };
}

const CHART_MONTHS = 12;

export const GET = withAuth(async (request: NextRequest, userId: string) => {
    const fiveMonthsAgo = getStartOfMonthsAgo(CHART_MONTHS);

    const [leads, chartLeads] = await Promise.all([
        prisma.lead.findMany({
            where: { userId },
        }),
        prisma.lead.findMany({
            where: {
                userId,
                status: { in: ["GANHO", "PERDIDO"] },
                updatedAt: { gte: fiveMonthsAgo },
            },
            select: { status: true, updatedAt: true },
        }),
    ]);

    const counters = countByStatus(leads);
    const chartData = buildChartData(chartLeads, CHART_MONTHS);

    return NextResponse.json({
        leads,
        counters,
        chartData,
    });
});
