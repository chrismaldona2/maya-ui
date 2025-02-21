"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TabProps {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Tab = ({ className, isActive, onClick, children }: TabProps) => {
  return (
    <button
      onClick={onClick}
      tabIndex={isActive ? -1 : 0}
      className={cn(
        "bg-neutral-200 px-6 py-2.5 text-sm text-neutral-550 dark:bg-neutral-900 dark:text-neutral-450 cursor-pointer select-none",
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

const TabsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" rounded-t-xl flex justify-start w-fit [&>*:first-child]:rounded-tl-xl [&>*:last-child]:rounded-tr-xl">
      {children}
    </div>
  );
};

Tab.Container = TabsContainer;

export default Tab;
