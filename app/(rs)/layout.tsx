import Header from "@/components/Header";
import { ReactNode } from "react";

export default async function RSLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-dvh">
      <Header />
      {children}
    </div>
  );
}
