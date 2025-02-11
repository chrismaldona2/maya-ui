import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "light" | "dark";
  children: ReactNode;
}

export const Button = ({
  variant = "dark",
  className,
  children,
  ...props
}: ButtonProps) => {
  const theme =
    variant === "dark"
      ? "bg-gradient-to-br from-neutral-800 to-neutral-950 text-neutral-50"
      : "bg-white text-zinc-900 border border-zinc-950";

  return (
    <button
      className={cn(
        "shadow-sm whitespace-nowrap overflow-clip flex justify-center items-center gap-2.5 py-2 px-4 rounded-md select-none hover:scale-[102%] active:scale-100 transition-all duration-300",
        theme,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
