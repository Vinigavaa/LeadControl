import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Trophy, TrendingUp, DollarSign } from "lucide-react";

interface KpiCardsProps {
  total: number;
  ganhos: number;
  conversionRate: number;
  totalRevenue: number;
}

function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function KpiCards({ total, ganhos, conversionRate, totalRevenue }: KpiCardsProps) {
  const cards = [
    {
      title: "Total de Leads",
      value: total.toString(),
      icon: Users,
      iconColor: "text-blue-400",
    },
    {
      title: "Leads Ganhos",
      value: ganhos.toString(),
      icon: Trophy,
      iconColor: "text-emerald-400",
    },
    {
      title: "Taxa de Conversao",
      value: `${conversionRate}%`,
      icon: TrendingUp,
      iconColor: "text-amber-400",
    },
    {
      title: "Receita Fechada",
      value: formatCurrency(totalRevenue),
      icon: DollarSign,
      iconColor: "text-green-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card key={card.title} className="py-5">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-sm text-zinc-400 font-normal">
                {card.title}
              </CardTitle>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
            <card.icon className={`h-5 w-5 ${card.iconColor}`} />
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
