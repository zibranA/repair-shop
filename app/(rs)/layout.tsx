import Header from "@/components/Header";
import { ReactNode } from "react";

export default async function RSLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-violet-950 h-dvh text-white">
      <Header />
      {children}
    </div>
  );
}
