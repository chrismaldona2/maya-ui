import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "max-w-full shadow-xs whitespace-nowrap overflow-clip flex justify-center items-center gap-2.5 py-2 px-4 rounded-md select-none hover:scale-[102%] active:scale-100 transition-transform duration-300 cursor-pointer",
  {
    variants: {
      variant: {
        filled: "bg-primary text-primary-foreground",
        outlined: "bg-transparent text-primary border border-primary",
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

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
