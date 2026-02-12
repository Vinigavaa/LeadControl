import Image from "next/image";
import Link from "next/link";
import { auth } from "@/lib/auth";
import LogoutButton from "@/components/logout-button";

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex h-20 items-center justify-between px-10 ml-25 pt-5">
      <Link href="/">
        <Image
          src="/leadcontrol.png"
          alt="LeadControl"
          width={180}
          height={40}
          priority
        />
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

        {session ? (
          <>
            <Link href="/dashboard" className="text-sm text-white/70 transition-colors hover:text-white">Dashboard</Link>
            <LogoutButton />
          </>
        ) : (
            <Link href="/login" className="text-sm text-white/70 transition-colors hover:text-white">Entrar</Link>
        )}
      </nav>
    </header>
  );
}
