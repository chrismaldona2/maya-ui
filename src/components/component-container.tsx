import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ComponentContainerProps {
  className?: string;
  children: ReactNode;
}

const ComponentContainer = ({
  className,
  children,
}: ComponentContainerProps) => {
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

export default ComponentContainer;
