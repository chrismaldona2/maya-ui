import Link from "next/link";
import { CodeIcon } from "./icons";
import { ReactNode } from "react";

export interface Example {
  id: number;
  title: string;
  component: ReactNode;
  className?: string;
  href: string;
}

const ExampleCard = ({ example }: { example: Example }) => {
  const { title, component, href } = example;

  return (
    <div className="relative flex h-full items-center justify-center">
      <Link
        href={href}
        className="absolute right-0 top-0 rounded-md bg-neutral-300 px-2 py-1 text-xs font-semibold dark:bg-[#2a2929]"
        aria-label={`See '${title}' code`}
      >
        <CodeIcon className="size-4 pointer-events-none [&_path]:fill-[#909090] dark:[&_path]:fill-neutral-600" />
      </Link>
      {component}
      <span className="absolute bottom-0 w-full select-none text-center text-sm text-neutral-550 dark:text-neutral-450">
        {title}
      </span>
    </div>
  );
};

export default ExampleCard;
