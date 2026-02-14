"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartDataPoint {
  month: string;
  ganhos: number;
  perdidos: number;
}

interface LeadsChartProps {
  chartData: ChartDataPoint[];
}

const ganhosConfig = {
  ganhos: {
    label: "Ganhos",
    color: "#34d399",
  },
} satisfies ChartConfig;

const perdidosConfig = {
  perdidos: {
    label: "Perdidos",
    color: "#f87171",
  },
} satisfies ChartConfig;

export default function LeadsChart({ chartData }: LeadsChartProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-white text-lg">Leads Ganhos</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={ganhosConfig} className="h-[250px] w-full">
            <BarChart data={chartData}>
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#a1a1aa", fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#a1a1aa", fontSize: 12 }}
                allowDecimals={false}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="ganhos"
                fill="#34d399"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-white text-lg">Leads Perdidos</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={perdidosConfig} className="h-[250px] w-full">
            <BarChart data={chartData}>
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#a1a1aa", fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#a1a1aa", fontSize: 12 }}
                allowDecimals={false}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="perdidos"
                fill="#f87171"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
