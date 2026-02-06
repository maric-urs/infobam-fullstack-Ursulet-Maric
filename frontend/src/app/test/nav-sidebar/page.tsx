"use client";

import { ThemeProvider } from "next-themes";
import NavSidebar from "@/components/NavSidebar";

export default function NavSidebarTestPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <div className="flex min-h-screen">
        <NavSidebar />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-6">Test : NavSidebar</h1>
          <p className="text-muted-foreground">
            test
          </p>
        </main>
      </div>
    </ThemeProvider>
  );
}
