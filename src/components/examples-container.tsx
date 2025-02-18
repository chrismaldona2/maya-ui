import RotatingThemeToggle from "./rotating-theme-toggle";
import CenteredWrapper from "./centered-wrapper";
import WavingHand from "./waving-hand";
import AnimatedSearchBox from "./animated-search-box";
import { BentoGrid } from "./bento-grid";
import { ReactNode } from "react";
import Link from "next/link";
import { CodeIcon } from "./icons";

interface Example {
  id: number;
  title: string;
  component: ReactNode;
  className?: string;
  href: string;
}

const examples: Example[] = [
  {
    id: 1,
    title: "Rotating theme toggle",
    component: <RotatingThemeToggle />,
    href: "/components/rotating-theme-toggle",
  },
  {
    id: 2,
    title: "Greeting",
    component: (
      <div className="flex items-center gap-2">
        <span className="pointer-events-none text-lg font-semibold text-neutral-500 dark:text-neutral-200">
          Hello world!
        </span>
        <WavingHand className="flex-shrink-0" />
      </div>
    ),
    className: "md:col-span-2 lg:col-span-1",
    href: "/components/waving-hand",
  },
  {
    id: 3,
    title: "Search box",
    component: <AnimatedSearchBox placeholder="something..." clearOnSubmit />,
    className: "col-span-full lg:col-span-2",
    href: "/components/animated-search-box",
  },
];

const ExampleCard = ({ example }: { example: Example }) => {
  const { title, component, href } = example;

  return (
    <div className="relative flex h-full items-center justify-center">
      <Link
        href={href}
        className="absolute right-0 top-0 rounded-md bg-neutral-300 px-2 py-1 text-xs font-semibold dark:bg-[#2a2929]"
      >
        <CodeIcon className="size-4 pointer-events-none [&_path]:fill-[#909090] dark:[&_path]:fill-neutral-600" />
      </Link>
      {component}
      <span className="absolute bottom-0 w-full select-none text-center text-sm text-neutral-400 dark:text-neutral-600">
        {title}
      </span>
    </div>
  );
};

const ExamplesContainer = () => {
  return (
    <CenteredWrapper>
      <div className="flex flex-col items-start drop-shadow-sm">
        <div className="overflow-clip rounded-t-xl">
          <button className="bg-[#e0e0e0] px-6 py-2.5 text-sm text-zinc-400 shadow-[inset_3px_2px_2px_rgba(255,255,255,0.35)] dark:bg-neutral-900 dark:text-neutral-500 dark:shadow-[inset_3px_2px_2px_rgba(40,44,44,0.2)]">
            Examples
          </button>
        </div>
        <div className="w-full rounded-b-xl rounded-tr-xl bg-gradient-to-b from-[#f2f1f1] to-[#f5f5f5] px-6 py-8 shadow-[inset_-2px_-4px_8px_rgba(200,200,200,0.1)] dark:from-[#111111] dark:to-[#0d0d0d] dark:shadow-[inset_-2px_-4px_8px_rgba(44,44,44,0.1)]">
          <BentoGrid>
            {examples.map((example) => (
              <BentoGrid.Item key={example.id} className={example.className}>
                <ExampleCard example={example} />
              </BentoGrid.Item>
            ))}
          </BentoGrid>
        </div>
      </div>
    </CenteredWrapper>
  );
};

export default ExamplesContainer;
