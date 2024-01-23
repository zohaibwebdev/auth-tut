import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const HomePage = () => {
  return (
    <main className="flex flex-col h-full justify-center items-center bg-gradient-to-br from-blue-400 to-blue-700">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold drop-shadow-md text-white",
            font.className
          )}
        >
          Auth 🔒
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
