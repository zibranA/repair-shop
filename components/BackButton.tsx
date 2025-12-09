"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button variant="outline" onClick={handleBack}>
      <ArrowLeft /> Back
    </Button>
  );
}
