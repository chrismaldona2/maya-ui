"use client";
import { cn } from "@/lib/utils";
import { cloneElement, ReactElement, ReactNode, useState } from "react";
import AnimateOnHeightChange from "./animate-on-height-change";

interface TabContainerProps {
  children: ReactElement<PanelProps> | ReactElement<PanelProps>[];
  defaultActive?: number;
  innerContainerClassName?: string;
  mountOnChange?: boolean;
}

const Tabs = ({
  children,
  innerContainerClassName,
  defaultActive = 0,
  mountOnChange = false,
}: TabContainerProps) => {
  const [activeTab, setActiveTab] = useState(defaultActive);
  const tabsArray = Array.isArray(children) ? children : [children];

  return (
    <section className="drop-shadow-xs">
      <div
        role="tablist"
        className="flex justify-start max-w-[95%] [&>*:first-child]:rounded-tl-xl [&>*:last-child]:rounded-tr-xl"
      >
        {tabsArray.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            title={tab.props.label}
            role="tab"
            aria-selected={activeTab === index}
            className={cn(
              "text-neutral-550 dark:text-neutral-450 bg-neutral-300 dark:bg-neutral-925  px-6 py-2.5 text-xs lg:text-sm cursor-pointer select-none truncate",
              {
                "font-medium text-neutral-800  dark:text-zinc-400 bg-neutral-200 dark:bg-neutral-900":
                  activeTab === index,
              },
              {
                "hover:bg-neutral-150 dark:hover:bg-neutral-850":
                  activeTab !== index,
              }
            )}
          >
            {tab.props.label}
          </button>
        ))}
      </div>

      <div
        className={cn(
          "py-5 px-[1.15rem] bg-linear-to-b from-neutral-100 to-zinc-100 dark:from-[#111111] dark:to-[#0d0d0d] rounded-xl",
          "shadow-[inset_-2px_-4px_8px_rgba(200,200,200,0.1)] dark:shadow-[inset_-2px_-4px_8px_rgba(44,44,44,0.1)]",
          "rounded-tl-none",
          innerContainerClassName
        )}
      >
        <AnimateOnHeightChange>
          {mountOnChange
            ? tabsArray.map((content, index) =>
                index === activeTab
                  ? cloneElement(content, { active: true, key: index })
                  : null
              )
            : tabsArray.map((content, index) =>
                cloneElement(content, {
                  active: index === activeTab,
                  key: index,
                })
              )}
        </AnimateOnHeightChange>
      </div>
    </section>
  );
};

interface PanelProps {
  children: ReactNode;
  label: string;
  active?: boolean;
  className?: string;
}

const TabPanel = ({ children, className, active = false }: PanelProps) => {
  return (
    <div
      role="tabpanel"
      aria-hidden={!active}
      className={cn(className, "hidden", { block: active })}
    >
      {children}
    </div>
  );
};

export { Tabs, TabPanel };
