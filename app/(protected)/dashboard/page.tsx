import DashboardContent from "@/components/dashboard/dashboard-content";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

function getStartOfMonthsAgo(months: number): Date {
  const date = new Date();
  date.setMonth(date.getMonth() - months);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

function countByStatus(leads: { status: string }[]) {
  return {
    total: leads.length,
    novo: leads.filter((l) => l.status === "NOVO").length,
    contato: leads.filter((l) => l.status === "CONTATO").length,
    qualificado: leads.filter((l) => l.status === "QUALIFICADO").length,
    proposta: leads.filter((l) => l.status === "PROPOSTA").length,
    negociacao: leads.filter((l) => l.status === "NEGOCIACAO").length,
    ganho: leads.filter((l) => l.status === "GANHO").length,
    perdido: leads.filter((l) => l.status === "PERDIDO").length,
  };
}

function buildChartData(leads: { status: string; updatedAt: Date }[], months: number) {
  const chartData = [];

  for (let i = months - 1; i >= 0; i--) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    const month = date.getMonth();
    const year = date.getFullYear();

    const monthLeads = leads.filter((l) => {
      const d = new Date(l.updatedAt);
      return d.getMonth() === month && d.getFullYear() === year;
    });

    chartData.push({
      month: date.toLocaleString("pt-BR", { month: "short" }),
      ganhos: monthLeads.filter((l) => l.status === "GANHO").length,
      perdidos: monthLeads.filter((l) => l.status === "PERDIDO").length,
    });
  }

  return chartData;
}

const CHART_MONTHS = 12;

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/");
  }

  const userId = session.user.id;
  const twelveMonthsAgo = getStartOfMonthsAgo(CHART_MONTHS);

  const [allLeads, chartLeads] = await Promise.all([
    prisma.lead.findMany({
      where: { userId },
      select: { status: true, valorFechado: true },
    }),
    prisma.lead.findMany({
      where: {
        userId,
        status: { in: ["GANHO", "PERDIDO"] },
        updatedAt: { gte: twelveMonthsAgo },
      },
      select: { status: true, updatedAt: true },
    }),
  ]);

  const counters = countByStatus(allLeads);
  const chartData = buildChartData(chartLeads, CHART_MONTHS);
  const conversionRate =
    counters.total > 0
      ? Math.round((counters.ganho / counters.total) * 100)
      : 0;

  const totalRevenue = allLeads
    .filter((l) => l.status === "GANHO" && l.valorFechado !== null)
    .reduce((sum, l) => sum + Number(l.valorFechado), 0);

  return (
    <DashboardContent
      counters={counters}
      chartData={chartData}
      conversionRate={conversionRate}
      totalRevenue={totalRevenue}
    />
  );
}
