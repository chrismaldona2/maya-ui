import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "shadow-sm whitespace-nowrap overflow-clip flex justify-center items-center gap-2.5 py-2 px-4 rounded-md select-none hover:scale-[102%] active:scale-100 transition-transform duration-300",
  {
    variants: {
      variant: {
        filled:
          "bg-gradient-to-br from-neutral-700 to-neutral-900 text-neutral-50 dark:from-white dark:to-neutral-300 dark:text-zinc-900",

        outlined:
          "bg-white text-zinc-900 border border-zinc-900 dark:border-neutral-400 dark:text-neutral-300 dark:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export const Button = ({
  variant,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
};
