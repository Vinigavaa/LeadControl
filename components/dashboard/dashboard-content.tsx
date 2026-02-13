"use client"
import { Lead } from "@/app/generated/prisma/client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { BarChart3 } from "lucide-react";

interface DashboardContentProps {
    leads: Lead[];
};

interface DashboardLeadData {
    leads: Lead[];
    counters: {
        total: number;
        novo: number;
        proposta: number;
        negociacao: number;
        ganho: number;
        perdido: number;
    };
    chartData: {
        month: string;
        ganhos: number;
        perdidos: number;
    }[];
}

export default function DashboardContent({leads}: DashboardContentProps){
    const [dashboardData, setDashboardData] = useState<DashboardLeadData | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async() => {
            try{
                const res = await fetch("/api/dashboard");
                if (res.ok) {
                    const data = await res.json();
                    setDashboardData(data);
                }
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return(
        <div className="space-y-6 justify-center items-center flex">
            {!dashboardData || dashboardData.counters.total === 0 ? (
                <Card className="py-16">
                    <CardContent className="flex flex-col items-center justify-center text-center">
                        <div className="p-4 rounded-full bg-indigo-50 mb-4">
                        <BarChart3 className="h-12 w-12 text-[#FFD41D]" />
                        </div>
                        <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                        Selecione uma turma e prova
                        </h3>
                        <p className="text-muted-foreground max-w-md">
                        Para visualizar os graficos e estatisticas, selecione uma turma e uma prova
                        nos campos acima.
                        </p>
                    </CardContent>
                </Card>
            ) : (
                <div>card com os dados aqui depois</div>
            )}
        </div>
    );
}