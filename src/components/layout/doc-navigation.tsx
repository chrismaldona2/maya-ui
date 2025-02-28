import Link from "next/link";
import { sidebarLinks } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "../icons";
import { ReactNode } from "react";

const flattenedLinks = sidebarLinks.reduce<
  Array<{ href: string; label: string }>
>((acc, section) => [...acc, ...section.links], []);

const DocNavigation = ({ currentPath }: { currentPath: string }) => {
  const currentIndex = flattenedLinks.findIndex(
    (link) => link.href === currentPath
  );
  if (currentIndex === -1) return null;
  const prevLink = currentIndex > 0 ? flattenedLinks[currentIndex - 1] : null;
  const nextLink =
    currentIndex < flattenedLinks.length - 1
      ? flattenedLinks[currentIndex + 1]
      : null;

  return (
    <div className="flex gap-2 justify-between">
      {prevLink ? (
        <NavigationLink href={prevLink.href} arrowDirection="left">
          {prevLink.label}
        </NavigationLink>
      ) : (
        <div />
      )}

      {nextLink && (
        <NavigationLink href={nextLink.href}>{nextLink.label}</NavigationLink>
      )}
    </div>
  );
};

const NavigationLink = ({
  href,
  children,
  arrowDirection = "right",
}: {
  href: string;
  children: ReactNode;
  arrowDirection?: "right" | "left";
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center gap-2 border border-neutral-400 dark:border-neutral-700 py-2 px-4 rounded-md",
        "hover:scale-[102%] transition-transform duration-300",
        { "flex-row-reverse": arrowDirection === "left" }
      )}
    >
      <span className="text-sm/none text-neutral-700 dark:text-neutral-400">
        {children}
      </span>
      <ArrowIcon
        className={cn(
          "h-3 text-neutral-400 dark:text-neutral-500 flex-shrink-0",
          { "rotate-180": arrowDirection === "left" }
        )}
      />
    </Link>
  );
};

export default DocNavigation;
