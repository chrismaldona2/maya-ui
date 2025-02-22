"use client";
import { ReactNode, useState } from "react";
import Tab from "./tab";
import Container from "./container";
import { cn } from "@/lib/utils";
import AnimateOnHeightChange from "./animate-on-height-change";

export interface ContainerWithTabsProps {
  tabs: { label: string; content: ReactNode }[];
  defaultTab?: string;
  innerContainerClassname?: string;
  tabsContainerClassName?: string;
  tabsClassname?: string;
}

const ContainerWithTabs = ({
  tabs,
  defaultTab = tabs[0].label,
  innerContainerClassname,
  tabsContainerClassName,
  tabsClassname,
}: ContainerWithTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  // This function prevents hover effects if there is only one tab
  const getTabs = () => {
    if (tabs.length > 1) {
      return tabs.map((tab) => (
        <Tab
          key={tab.label}
          isActive={activeTab === tab.label}
          onClick={() => setActiveTab(tab.label)}
          className={tabsClassname}
        >
          {tab.label}
        </Tab>
      ));
    } else {
      return (
        <Tab className={tabsClassname} isActive>
          {tabs[0].label}
        </Tab>
      );
    }
  };

  return (
    <div className="drop-shadow-sm max-w-full">
      <Tab.Container className={tabsContainerClassName}>
        {getTabs()}
      </Tab.Container>

      <Container
        className={cn(
          "bg-gradient-to-b from-neutral-100 to-zinc-100 dark:from-[#111111] dark:to-[#0d0d0d] rounded-tl-none",
          innerContainerClassname
        )}
      >
        <AnimateOnHeightChange>
          {tabs.find((tab) => tab.label === activeTab)?.content}
        </AnimateOnHeightChange>
      </Container>
    </div>
  );
};

export default ContainerWithTabs;
