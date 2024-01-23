"use client";
import { useRouter } from "next/navigation";
interface LoginButtonProps {
  children: React.ReactNode;
  model?: "model" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  model = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    console.log("click");
    router.push("/auth/login");
  };

  if (model == "model") {
    return <h3>todo: implement model</h3>;
  }
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
