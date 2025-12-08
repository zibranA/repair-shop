import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

export default function LoginPage() {
  return (
    <main className="flex h-dvh justify-center items-center">
      <Button asChild>
        <LoginLink>Sign In</LoginLink>
      </Button>
    </main>
  );
}
