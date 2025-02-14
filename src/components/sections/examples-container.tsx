import { ReactNode } from "react";
import RotatingThemeToggle from "../toggles/rotating-theme-toggle";
import SectionWrapper from "./section-wrapper";
import { cn } from "@/lib/utils";
import WavingHand from "../decorators/waving-hand";
import AnimatedSearchBox from "../inputs/animated-search-box";

const ExamplesContainer = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-start drop-shadow-sm">
        <div className="overflow-clip rounded-t-xl">
          <button
            className="bg-[#ededed] dark:bg-neutral-900 text-zinc-400 dark:text-neutral-500 px-6 py-2.5 text-sm 
          shadow-[inset_3px_2px_2px_rgba(255,255,255,0.35)] dark:shadow-[inset_3px_2px_2px_rgba(40,44,44,0.2)]"
          >
            Examples
          </button>
        </div>
        <div className="w-full px-7 py-8 bg-gradient-to-b from-[#f2f1f1] to-[#f5f5f5] dark:from-[#111111] dark:to-[#0d0d0d] rounded-b-xl rounded-tr-xl shadow-[inset_-2px_-4px_8px_rgba(200,200,200,0.1)] dark:shadow-[inset_-2px_-4px_8px_rgba(44,44,44,0.1)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 gap-6">
            <BentoGridItem title="Rotating theme toggle">
              <RotatingThemeToggle />
            </BentoGridItem>
            <BentoGridItem
              title="Greeting"
              className="md:col-span-2 lg:col-span-1"
            >
              <div className="flex gap-2 items-center">
                <span className="text-center text-lg font-semibold text-neutral-500 dark:text-neutral-200 pointer-events-none">
                  Hello world!
                </span>
                <WavingHand />
              </div>
            </BentoGridItem>
            <BentoGridItem
              title="Search box"
              className="col-span-full lg:col-span-2"
            >
              <AnimatedSearchBox />
            </BentoGridItem>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExamplesContainer;

const BentoGridItem = ({
  className,
  title,
  children,
}: {
  className?: string;
  title?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative bg-neutral-200 dark:bg-[#131313] rounded-xl shadow-[inset_3px_2px_2px_rgba(200,200,200,.1)] dark:shadow-[inset_2px_2px_8px_rgba(40,44,44,0.1)] overflow-hidden min-h-[250px] p-4 flex items-center justify-center col-span-1 row-span-1",
        className
      )}
    >
      {title && (
        <span className="absolute bottom-3 w-full text-center text-sm text-neutral-400 dark:text-neutral-600">
          {title}
        </span>
      )}
      {children}
    </div>
  );
};
