import Link from "next/link";
import { ReactNode } from "react";
import { CodeIcon } from "./icons";
import { cn } from "@/lib/utils";

interface ComponentCardProps {
  children: ReactNode;
  title?: string;
  codeLink?: string;
  className?: string;
}

const ComponentCard = ({
  title,
  children,
  codeLink,
  className,
}: ComponentCardProps) => {
  return (
    <div
      className={cn(
        "relative size-full flex items-center gap-2 justify-center py-4 px-2 bg-neutral-200 dark:bg-[#131313] rounded-xl shadow-[inset_3px_2px_2px_rgba(200,200,200,.1)] dark:shadow-[inset_2px_2px_8px_rgba(40,44,44,0.1)] min-h-[175px] overflow-clip",
        className
      )}
    >
      {codeLink && (
        <Link
          href={codeLink}
          className="absolute right-4 top-4 rounded-md bg-neutral-300 px-2 py-1 text-xs font-semibold dark:bg-[#2a2929]"
          aria-label={`See '${title}' code`}
        >
          <CodeIcon className="size-4 pointer-events-none text-[#909090] dark:text-neutral-600" />
        </Link>
      )}
      {children}
      {title && (
        <span className="absolute bottom-2 w-full select-none text-center text-sm text-neutral-550 dark:text-neutral-450">
          {title}
        </span>
      )}
    </div>
  );
};

export default ComponentCard;
