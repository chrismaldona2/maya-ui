import CenteredWrapper from "@/components/layout/centered-wrapper";
import { ReactNode } from "react";
import DocsSidebar from "@/components/layout/docs-sidebar";
import BlurredCircle from "@/components/blurred-circle";

const Components = ({ children }: { children: ReactNode }) => {
  return (
    <CenteredWrapper className="flex-grow flex">
      <div className="w-full grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] lg:md:grid-cols-[280px_minmax(0,1fr)_10%]">
        <div className="hidden h-fit max-h-[calc(100vh-7.875rem)] shrink-0 md:sticky md:top-14 md:block">
          <DocsSidebar />
        </div>
        <main className="h-full py-12 md:py-8 px-2 md:px-14 md:border-l border-neutral-200 dark:border-neutral-900 overflow-hidden">
          {children}
        </main>
        <div className="hidden h-full border-l border-neutral-200 dark:border-neutral-900 lg:block"></div>
      </div>

      <BlurredCircle
        className="fixed bg-[#c678dd]/20 sm:bg-[#c678dd]/40 dark:bg-[#c678dd]/5 sm:dark:bg-[#c678dd]/10
      size-[375px] -top-[275px] -right-[125px] blur-[100px]"
      />
      <BlurredCircle className="fixed bg-[#61afef]/45 dark:bg-[#61afef]/10 size-[300px] -bottom-[200px] -left-[125px] blur-[100px]" />
    </CenteredWrapper>
  );
};

export default Components;
