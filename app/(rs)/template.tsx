import { ReactNode } from "react";

export default async function Template({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
