import Image from "next/image";
import { Button } from "@/components/ui/button";

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
              <Button>
                Começar agora
              </Button>
              <Button>
                Ver como funciona
              </Button>
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

          {/* ── Coluna direita: GIF do produto ── */}
          <div>
            <Image
              src="/HeroGif.gif"
              alt="LeadControl em ação"
              width={600}
              height={400}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
