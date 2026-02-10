interface BackgroundPatternProps {
  children?: React.ReactNode;
  /** Posição da linha horizontal em px (distância do topo) */
  horizontalLineTop?: number;
  /** Posição da linha vertical em px (distância da borda esquerda) */
  verticalLineLeft?: number;
  /** Cor das linhas (padrão: #FFD41D) */
  lineColor?: string;
  className?: string;
}

export default function BackgroundPattern({
  children,
  horizontalLineTop = 80,
  verticalLineLeft = 120,
  lineColor = "#FFD41D",
  className,
}: BackgroundPatternProps) {
  return (
    <div className={`relative min-h-screen bg-[#000000] ${className ?? ""} w-full`}>
      {/* Linha horizontal */}
      <div
        className="pointer-events-none absolute right-0 left-0 z-0 h-px"
        style={{ top: horizontalLineTop, backgroundColor: lineColor }}
      />

      {/* Linha vertical */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 z-0 w-px"
        style={{ left: verticalLineLeft, backgroundColor: lineColor }}
      />

      {/* Conteúdo */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
