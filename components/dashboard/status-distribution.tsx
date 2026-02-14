import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatusCounters {
  total: number;
  novo: number;
  contato: number;
  qualificado: number;
  proposta: number;
  negociacao: number;
  ganho: number;
  perdido: number;
}

interface StatusDistributionProps {
  counters: StatusCounters;
}

const statusConfig = [
  { key: "novo", label: "Novo", color: "bg-blue-500" , dot: "bg-blue-500" },
  { key: "contato", label: "Contato", color: "bg-cyan-500", dot: "bg-cyan-500" },
  { key: "qualificado", label: "Qualificado", color: "bg-violet-500", dot: "bg-violet-500" },
  { key: "proposta", label: "Proposta", color: "bg-amber-500", dot: "bg-amber-500" },
  { key: "negociacao", label: "Negociacao", color: "bg-orange-500", dot: "bg-orange-500" },
  { key: "ganho", label: "Ganho", color: "bg-emerald-500", dot: "bg-emerald-500" },
  { key: "perdido", label: "Perdido", color: "bg-red-500", dot: "bg-red-500" },
] as const;

export default function StatusDistribution({ counters }: StatusDistributionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-white text-lg">Status dos Leads</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Segmented progress bar */}
        {counters.total > 0 && (
          <div className="flex h-3 w-full overflow-hidden rounded-full">
            {statusConfig.map(({ key, color }) => {
              const count = counters[key];
              if (count === 0) return null;
              const pct = (count / counters.total) * 100;
              return (
                <div
                  key={key}
                  className={`${color}`}
                  style={{ width: `${pct}%` }}
                />
              );
            })}
          </div>
        )}

        {/* Itemized list */}
        <div className="space-y-2">
          {statusConfig.map(({ key, label, dot }) => (
            <div key={key} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
                <span className="text-zinc-300">{label}</span>
              </div>
              <span className="text-white font-medium">{counters[key]}</span>
            </div>
          ))}
        </div>

        {/* Total row */}
        <div className="flex items-center justify-between text-sm border-t border-zinc-800 pt-3">
          <span className="text-zinc-400 font-medium">Total</span>
          <span className="text-white font-bold">{counters.total}</span>
        </div>
      </CardContent>
    </Card>
  );
}
