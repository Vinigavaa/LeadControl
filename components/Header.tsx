import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between px-10 ml-25 pt-5">
      <Link href="/" className="text-xl font-bold text-[#FFD41D]">
        LeadControl
      </Link>

      <nav className="flex items-center gap-8">
        <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
          Produto
        </Link>
        <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
          Preços
        </Link>
        <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
          Contato
        </Link>
        <Link href="#" className="rounded-md bg-[#FFD41D] px-5 py-2 text-sm font-semibold text-[#000000] transition-colors hover:bg-[#e6bf1a]">
          Começar agora
        </Link>
      </nav>
    </header>
  );
}
