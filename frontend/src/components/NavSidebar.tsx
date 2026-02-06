import Link from "next/link";
import { Home, Car } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function NavSidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-56 shrink-0 bg-card shadow-subtle">
      <div className="p-4 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg font-semibold hover:bg-accent transition-colors">
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
            <Car className="h-4 w-4" />
          </div>
          Ursulet Maric
        </Link>
        <ThemeToggle />
      </div>
      <nav className="flex-1 px-3 space-y-1">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-foreground bg-accent">
          <Car className="h-5 w-5 text-primary" />
          Véhicules
        </div>
      </nav>
    </aside>
  );
}
