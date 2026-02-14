import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import AppSidebar from "@/components/app-sidebar";
import SidebarMobileTrigger from "@/components/sidebar-mobile-trigger";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get("x-next-pathname") ?? "/dashboard";

  return (
    <div className="flex h-screen">
      <aside className="hidden md:flex">
        <AppSidebar pathname={pathname} />
      </aside>

      <div className="flex-1 flex flex-col overflow-auto">
        <header className="md:hidden flex items-center h-14 px-4 border-b border-zinc-800 gap-3">
          <SidebarMobileTrigger pathname={pathname} />
          <Link href="/dashboard">
            <Image
              src="/leadcontrol.png"
              alt="LeadControl"
              width={120}
              height={28}
              priority
            />
          </Link>
        </header>

        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
