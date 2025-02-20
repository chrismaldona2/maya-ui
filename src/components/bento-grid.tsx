import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[14rem] lg:auto-rows-[16rem] gap-6 w-full ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BentoGrid;
