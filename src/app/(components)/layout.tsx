import CenteredWrapper from "@/components/centered-wrapper";
import { ReactNode } from "react";
import DocsSidebar from "@/components/layout/docs-sidebar";

const Components = async ({ children }: { children: ReactNode }) => {
  return (
    <CenteredWrapper>
      <div className="grid w-full md:grid-cols-[300px_minmax(0,1fr)] lg:md:grid-cols-[280px_minmax(0,1fr)_10%]">
        <div className="hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r border-neutral-200 dark:border-neutral-900 md:sticky md:top-14 md:block">
          <DocsSidebar />
        </div>
        <main
          className="flex-grow flex flex-col h-full py-12 md:py-8 px-2 md:px-14"
          id="top"
        >
          {children}
        </main>

        <div className="hidden h-full border-l border-neutral-200 dark:border-neutral-900 lg:block"></div>
      </div>
    </CenteredWrapper>
  );
};

export default Components;
