import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CenteredWrapperProps {
  children: ReactNode;
  className?: string;
}

const CenteredWrapper = ({ className, children }: CenteredWrapperProps) => {
  return (
    <div className={cn("max-w-screen-2xl px-6 w-full mx-auto ", className)}>
      {children}
    </div>
  );
};

export default CenteredWrapper;
