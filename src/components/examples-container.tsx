import RotatingThemeToggle from "./rotating-theme-toggle";
import SectionWrapper from "./layout/section-wrapper";
import WavingHand from "./waving-hand";
import AnimatedSearchBox from "./animated-search-box";
import { BentoGrid } from "./bento-grid";
import { ReactNode } from "react";
import Link from "next/link";
import { CodeIcon } from "./ui/icons";

const ExamplesContainer = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-start drop-shadow-sm">
        <div className="overflow-clip rounded-t-xl">
          <button
            className="bg-[#e0e0e0] dark:bg-neutral-900 text-zinc-400 dark:text-neutral-500 px-6 py-2.5 text-sm 
          shadow-[inset_3px_2px_2px_rgba(255,255,255,0.35)] dark:shadow-[inset_3px_2px_2px_rgba(40,44,44,0.2)]"
          >
            Random examples
          </button>
        </div>
        <div className="w-full px-6 py-8 bg-gradient-to-b from-[#f2f1f1] to-[#f5f5f5] dark:from-[#111111] dark:to-[#0d0d0d] rounded-b-xl rounded-tr-xl shadow-[inset_-2px_-4px_8px_rgba(200,200,200,0.1)] dark:shadow-[inset_-2px_-4px_8px_rgba(44,44,44,0.1)]">
          <BentoGrid>
            {examples.map(({ id, title, component, className }) => (
              <BentoGrid.Item key={id} className={className}>
                <div className="relative h-full flex items-center justify-center">
                  <Link
                    href="/"
                    className="absolute top-0 right-0 py-1 px-2 text-xs font-semibold rounded-md bg-neutral-300 dark:bg-[#2a2929]"
                  >
                    <CodeIcon className="size-4 [&_path]:fill-[#909090] dark:[&_path]:fill-neutral-600 pointer-events-none" />
                  </Link>
                  {component}
                  <span className="absolute bottom-0 w-full text-center text-sm text-neutral-400 dark:text-neutral-600 select-none">
                    {title}
                  </span>
                </div>
              </BentoGrid.Item>
            ))}
          </BentoGrid>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExamplesContainer;

type Example = {
  id: number;
  title: string;
  component: ReactNode;
  className?: string;
};

const examples: Example[] = [
  { id: 1, title: "Rotating theme toggle", component: <RotatingThemeToggle /> },
  {
    id: 2,
    title: "Greeting",
    component: (
      <div className="flex gap-2 items-center">
        <span className="text-center text-lg font-semibold text-neutral-500 dark:text-neutral-200 pointer-events-none">
          Hello world!
        </span>
        <WavingHand className="flex-shrink-0" />
      </div>
    ),
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    id: 3,
    title: "Search box",
    component: <AnimatedSearchBox placeholder="something..." clearOnSubmit />,
    className: "col-span-full lg:col-span-2",
  },
];
