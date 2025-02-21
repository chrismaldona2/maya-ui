import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={cn(
        "w-full rounded-xl px-[1.7rem] py-[1.85rem] bg-secondary text-secondary-foreground shadow-[inset_-2px_-4px_8px_rgba(200,200,200,0.1)] dark:shadow-[inset_-2px_-4px_8px_rgba(44,44,44,0.1)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
