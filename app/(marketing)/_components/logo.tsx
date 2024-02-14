import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        height="30"
        width="30"
        alt="Logo"
        className="-mr-3 dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        height="30"
        width="30"
        alt="Logo"
        className="-mr-3 hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>otion</p>
    </div>
  );
};
