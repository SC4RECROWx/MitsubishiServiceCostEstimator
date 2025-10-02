"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { CalendarPlus } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const waNumber = "6282348000085";
  const waMessage = encodeURIComponent("Halo, saya ingin melakukan booking service untuk kendaraan saya.");
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;
  
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";


  return (
    <header className="sticky top-0 z-10 w-full border-b bg-card text-card-foreground no-print">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <img
            src="/Bosowa_Corporation.png"
            alt="Bosowa Logo"
            className={cn( "h-10 w-auto" )}
          />
          <span className="hidden text-lg font-semibold tracking-wide sm:inline">
            Tanya Jawab Bengkel
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a href={waLink} target="_blank" rel="noopener noreferrer">
            <Button size="sm">
                <CalendarPlus />
                <span>Tanya</span>
            </Button>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
