import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ className, children }: SectionWrapperProps) => {
  return (
    <div
      className={cn(
        "max-w-screen-xl py-4 px-6 w-full mx-auto overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
