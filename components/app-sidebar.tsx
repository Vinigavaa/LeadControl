import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import LogoutButton from "@/components/logout-button";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

interface AppSidebarProps {
  pathname: string;
}

export default function AppSidebar({ pathname }: AppSidebarProps) {
  return (
    <div className="flex h-full w-60 flex-col bg-black border-r border-zinc-800">
      <div className="p-6">
        <Link href="/dashboard">
          <Image
            src="/leadcontrol.png"
            alt="LeadControl"
            width={140}
            height={32}
            priority
          />
        </Link>
      </div>

      <nav className="flex-1 px-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-zinc-800 text-[#FFD41D]"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
              }`}
            >
              <item.icon
                className={`h-4 w-4 ${isActive ? "text-[#FFD41D]" : ""}`}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-zinc-800 p-3">
        <LogoutButton />
      </div>
    </div>
  );
}
