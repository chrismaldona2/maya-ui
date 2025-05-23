import CenteredWrapper from "@/components/layout/centered-wrapper";
import { ReactNode } from "react";
import DocsSidebar from "@/components/layout/docs-sidebar";
import BlurredCircle from "@/components/blurred-circle";

const Components = ({ children }: { children: ReactNode }) => {
  return (
    <CenteredWrapper className="grow flex">
      <div className="w-full grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] lg:md:grid-cols-[280px_minmax(0,1fr)_10%]">
        <StickyDocsSidebar />
        <main className="h-full py-12 md:py-8 px-6 md:px-14 md:border-l border-neutral-200 dark:border-neutral-900 overflow-x-hidden">
          {children}
        </main>
        <div className="hidden h-full border-l border-neutral-200 dark:border-neutral-900 lg:block"></div>
      </div>

      <BlurredCircle
        className="fixed bg-[#c678dd]/20 sm:bg-[#c678dd]/30 xl:bg-[#c678dd]/50 dark:bg-[#c678dd]/5 sm:dark:bg-[#c678dd]/10
      size-[350px] -top-[225px] -right-[115px] blur-[100px] origin-[60%_50%]"
      />
      <BlurredCircle className="fixed bg-[#61afef]/45 dark:bg-[#61afef]/10 size-[275px] -bottom-[200px] -left-[175px] blur-[100px]" />
    </CenteredWrapper>
  );
};

export default Components;

const StickyDocsSidebar = () => {
  return (
    <div className="hidden h-fit max-h-[calc(100vh-7.875rem)] shrink-0 md:sticky md:top-14 md:block">
      <DocsSidebar />
    </div>
  );
};
