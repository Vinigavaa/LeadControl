import KpiCards from "./kpi-cards";
import StatusDistribution from "./status-distribution";
import LeadsChart from "./leads-chart";

interface Counters {
  total: number;
  novo: number;
  contato: number;
  qualificado: number;
  proposta: number;
  negociacao: number;
  ganho: number;
  perdido: number;
}

interface ChartDataPoint {
  month: string;
  ganhos: number;
  perdidos: number;
}

interface DashboardContentProps {
  counters: Counters;
  chartData: ChartDataPoint[];
  conversionRate: number;
  totalRevenue: number;
}

export default function DashboardContent({
  counters,
  chartData,
  conversionRate,
  totalRevenue,
}: DashboardContentProps) {
  if (counters.total === 0) {
    return (
      <div className="max-w-7xl mx-auto p-6 flex justify-center items-center py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-semibold text-zinc-100 mb-2">
            Nao ha dados de leads
          </h3>
          <p className="text-muted-foreground max-w-md">
            Cadastre seus leads para visualizar as estatisticas do dashboard.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <span className="text-sm text-zinc-400">Ultimos 12 meses</span>
      </div>

      <KpiCards
        total={counters.total}
        ganhos={counters.ganho}
        conversionRate={conversionRate}
        totalRevenue={totalRevenue}
      />

      <StatusDistribution counters={counters} />

      <LeadsChart chartData={chartData} />
    </div>
  );
}
