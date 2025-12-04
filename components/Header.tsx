import { File, HomeIcon, UserRound } from "lucide-react";
import NavButton from "./NavButton";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

export default function Header() {
  return (
    <header className="animate-slide h-12 p-2  sticky z-20">
      <div className="flex h-8 items-center justify-between">
        <div className="flex items-center gap-1">
          <NavButton href="/home" label="Home" icon={HomeIcon} />
          <Link
            href="/home"
            className="flex justify-center items-center gap-2 ml-0"
            title="Home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0">Dans Repair Shop</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton href="/tickets" label="Tickets" icon={File} />
          <NavButton href="/customers" label="Customers" icon={UserRound} />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
