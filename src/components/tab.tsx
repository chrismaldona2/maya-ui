"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TabProps {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

const Tab = ({
  className,
  isActive,
  onClick,
  children,
  ariaLabel,
}: TabProps) => {
  return (
    <button
      onClick={onClick}
      tabIndex={isActive ? -1 : 0}
      aria-label={ariaLabel}
      title={ariaLabel}
      className={cn(
        "bg-neutral-200 px-6 py-2.5 text-sm text-neutral-550 dark:bg-neutral-900 dark:text-neutral-450 cursor-pointer select-none truncate",
        onClick &&
          !isActive &&
          "bg-neutral-300 dark:bg-neutral-925 hover:bg-neutral-150 dark:hover:bg-neutral-850 ",
        className
      )}
    >
      {children}
    </button>
  );
};

const TabsContainer = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-[95%] rounded-t-xl flex justify-start w-fit [&>*:first-child]:rounded-tl-xl [&>*:last-child]:rounded-tr-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

Tab.Container = TabsContainer;

export default Tab;
