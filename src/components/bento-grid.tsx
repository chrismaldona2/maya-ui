import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[15rem] lg:auto-rows-[18rem] gap-6 w-full ",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoItemProps {
  className?: string;
  children: ReactNode;
}

const BentoGridItem = ({ className, children }: BentoItemProps) => {
  return (
    <div
      className={cn(
        "relative bg-neutral-200 dark:bg-[#131313] rounded-xl shadow-[inset_3px_2px_2px_rgba(200,200,200,.1)] dark:shadow-[inset_2px_2px_8px_rgba(40,44,44,0.1)] overflow-hidden p-4 col-span-1 row-span-1",
        className
      )}
    >
      {children}
    </div>
  );
};

BentoGrid.Item = BentoGridItem;
