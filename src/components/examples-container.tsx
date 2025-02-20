import CenteredWrapper from "./centered-wrapper";
import BentoGrid from "./bento-grid";
import ComponentContainer from "./component-container";
import ExampleCard, { Example } from "./example-card";

import AnimatedSearchBox from "@/components/showcase/animated-search-box";
import WavingHand from "@/components/showcase/waving-hand";

const ExamplesContainer = () => {
  return (
    <CenteredWrapper>
      <div className="flex flex-col items-start drop-shadow-sm">
        <div className="overflow-clip rounded-t-xl">
          <button className="bg-[#e0e0e0] px-6 py-2.5 text-sm text-neutral-550 shadow-[inset_3px_2px_2px_rgba(255,255,255,0.35)] dark:bg-neutral-900 dark:text-neutral-450 dark:shadow-[inset_3px_2px_2px_rgba(40,44,44,0.2)]">
            Examples
          </button>
        </div>
        <div className="w-full rounded-b-xl rounded-tr-xl bg-gradient-to-b from-[#f2f1f1] to-[#f5f5f5] px-6 py-8 shadow-[inset_-2px_-4px_8px_rgba(200,200,200,0.1)] dark:from-[#111111] dark:to-[#0d0d0d] dark:shadow-[inset_-2px_-4px_8px_rgba(44,44,44,0.1)]">
          <BentoGrid>
            {examples.map((example) => (
              <ComponentContainer
                key={example.id}
                className={example.className}
              >
                <ExampleCard example={example} />
              </ComponentContainer>
            ))}
          </BentoGrid>
        </div>
      </div>
    </CenteredWrapper>
  );
};

export default ExamplesContainer;

export const examples: Example[] = [
  {
    id: 1,
    title: "Greeting",
    component: (
      <div className="flex items-center gap-2">
        <span className="pointer-events-none text-lg font-semibold text-neutral-550 dark:text-neutral-200">
          Hello world!
        </span>
        <WavingHand className="flex-shrink-0" />
      </div>
    ),
    className: "col-span-full lg:col-span-2 ",
    href: "/components/waving-hand",
  },
  {
    id: 2,
    title: "Search box",
    component: <AnimatedSearchBox placeholder="something..." clearOnSubmit />,
    className: "col-span-full lg:col-span-2",
    href: "/components/animated-search-box",
  },
];
