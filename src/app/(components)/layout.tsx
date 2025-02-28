import CenteredWrapper from "@/components/layout/centered-wrapper";
import { ReactNode } from "react";
import DocsSidebar from "@/components/layout/docs-sidebar";

const Components = async ({ children }: { children: ReactNode }) => {
  return (
    <CenteredWrapper className="flex-grow flex">
      <div className="w-full grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] lg:md:grid-cols-[280px_minmax(0,1fr)_10%]">
        <div className="hidden h-[calc(100vh-7.875rem)] shrink-0 md:sticky md:top-14 md:block">
          <DocsSidebar />
        </div>
        <main className="h-full py-12 md:py-8 px-2 md:px-14 md:border-l border-neutral-200 dark:border-neutral-900">
          {children}
        </main>
        <div className="hidden h-full border-l border-neutral-200 dark:border-neutral-900 lg:block"></div>
      </div>
    </CenteredWrapper>
  );
};

export default Components;
