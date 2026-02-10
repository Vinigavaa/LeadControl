export default function Hero() {
  return (
    <section className="relative ml-120px overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-48">
          {/* ── Coluna esquerda: conteúdo ── */}
          <div className="flex flex-col items-start gap-7">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-medium text-neutral-50">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FFD41D]" />
              Usado por +5.000 times de vendas
            </span>

            {/* Headline */}
            <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl">
              Converta mais leads.{" "}
              <span className="text-[#FFD41D]">Venda com inteligência.</span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-lg text-lg leading-relaxed text-neutral-400">
              Organize seu funil de vendas, automatize follow-ups e acompanhe
              cada lead em tempo real. Tudo em uma plataforma simples e
              poderosa.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#"
                className="rounded-lg bg-[#FFD41D] px-7 py-3.5 text-sm font-bold text-black shadow-lg shadow-[#FFD41D]/25 transition-all hover:brightness-95 hover:shadow-xl hover:shadow-[#FFD41D]/30">
                Começar agora
              </a>
              <a
                href="#"
                className="group flex items-center gap-2 rounded-lg border border-neutral-200 px-7 py-3.5 text-sm font-medium text-neutral-400 transition-colors hover:border-neutral-300 hover:bg-neutral-50">
                Ver como funciona
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-[#FFD41D] text-[10px] font-bold text-neutral-900"
                  >
                    {["JL", "AM", "RK", "TS"][i]}
                  </div>
                ))}
              </div>
              <div className="text-xs text-neutral-400">
                <span className="font-semibold text-neutral-200">+2.400</span>{" "}
                empresas já usam o LeadControl
              </div>
            </div>
          </div>

          {/* ── Coluna direita: mockup dashboard ── */}
          <div className="relative">
            {/* Glow atrás do mockup */}
            <div className="pointer-events-none absolute inset-0 -m-10 rounded-3xl bg-[#FFD41D]/10 blur-[60px]" />

            {/* Dashboard principal */}
            <div className="relative rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-2xl shadow-neutral-200/60">
              {/* Top bar do dashboard */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#FFD41D]" />
                  <span className="text-xs font-semibold text-neutral-700">
                    Dashboard
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                  <div className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                  <div className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                </div>
              </div>

              {/* Métricas */}
              <div className="mb-5 grid grid-cols-3 gap-3">
                <MetricCard label="Leads ativos" value="1.248" change="+12%" />
                <MetricCard label="Conversão" value="24,8%" change="+3,2%" />
                <MetricCard label="Receita" value="R$ 84k" change="+18%" />
              </div>

              {/* Gráfico de barras */}
              <div className="mb-5 rounded-xl border border-neutral-100 bg-neutral-50/80 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-neutral-500">
                    Leads por semana
                  </span>
                  <span className="text-[10px] text-neutral-400">Últimos 30 dias</span>
                </div>
                <div className="flex items-end gap-1.5 h-20">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm transition-all"
                        style={{
                          height: `${h}%`,
                          backgroundColor:
                            h >= 90 ? "#FFD41D" : "#e5e5e5",
                        }}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Funil de vendas */}
              <div className="rounded-xl border border-neutral-100 bg-neutral-50/80 p-4">
                <span className="mb-3 block text-[11px] font-medium text-neutral-500">
                  Funil de vendas
                </span>
                <div className="flex flex-col gap-2">
                  <FunnelStep label="Novos leads" value={320} max={320} />
                  <FunnelStep label="Qualificados" value={210} max={320} />
                  <FunnelStep label="Proposta enviada" value={98} max={320} />
                  <FunnelStep label="Fechados" value={42} max={320} />
                </div>
              </div>
            </div>

            {/* Card flutuante — canto superior direito */}
            <div className="absolute -top-4 -right-4 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-lg sm:-right-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD41D]/15">
                  <svg className="h-4 w-4 text-[#FFD41D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400">Crescimento</div>
                  <div className="text-sm font-bold text-neutral-800">+32%</div>
                </div>
              </div>
            </div>

            {/* Card flutuante — canto inferior esquerdo */}
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-lg sm:-left-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400">Leads hoje</div>
                  <div className="text-sm font-bold text-neutral-800">+47</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Componentes auxiliares ── */

function MetricCard({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-xl border border-neutral-100 bg-neutral-50/80 p-3">
      <div className="text-[10px] text-neutral-400">{label}</div>
      <div className="mt-1 text-lg font-bold text-neutral-800">{value}</div>
      <div className="mt-0.5 text-[10px] font-medium text-green-600">
        {change}
      </div>
    </div>
  );
}

function FunnelStep({
  label,
  value,
  max,
}: {
  label: string;
  value: number;
  max: number;
}) {
  const pct = (value / max) * 100;
  return (
    <div className="flex items-center gap-3">
      <span className="w-28 text-[11px] text-neutral-500 shrink-0">{label}</span>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-200">
        <div
          className="h-full rounded-full bg-[#FFD41D]"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-8 text-right text-[11px] font-semibold text-neutral-600 shrink-0">
        {value}
      </span>
    </div>
  );
}
