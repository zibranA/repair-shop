import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  icon: LucideIcon;
  label: string;
  href?: string;
};

export default function NavButton({ icon: Icon, label, href }: Props) {
  if (href) {
    return (
      <Button variant="ghost" size="icon">
        <Link href={href}>
          <Icon />
        </Link>
      </Button>
    );
  } else {
    return <Icon />;
  }
}
