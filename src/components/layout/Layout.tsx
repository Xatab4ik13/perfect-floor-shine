import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useScrollToHash } from "@/hooks/useScrollToHash";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useScrollToHash();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
