"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import AppSidebar from "@/components/app-sidebar";

interface SidebarMobileTriggerProps {
  pathname: string;
}

export default function SidebarMobileTrigger({
  pathname,
}: SidebarMobileTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
      >
        <Menu className="h-5 w-5 text-zinc-100" />
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="left"
          showCloseButton={false}
          className="w-60 p-0 bg-zinc-950 border-zinc-800"
        >
          <SheetTitle className="sr-only">Menu de navegacao</SheetTitle>
          <AppSidebar pathname={pathname} />
        </SheetContent>
      </Sheet>
    </>
  );
}
