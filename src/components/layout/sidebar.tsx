import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <aside
      className="flex h-full flex-col gap-9 overflow-auto px-4 py-6 lg:py-8"
      aria-label="Sidebar Navigation"
    >
      {children}
    </aside>
  );
};

interface SidebarSectionProps {
  children: ReactNode;
  title: string;
}

const SidebarSection = ({ title, children }: SidebarSectionProps) => {
  return (
    <section>
      <h2 className="mx-1 text-base font-semibold text-neutral-600 dark:text-gray-300 mb-0.5">
        {title}
      </h2>
      <div className="flex flex-col">{children}</div>
    </section>
  );
};

interface SidebarLinkProps {
  children: ReactNode;
  href: string;
  isActive?: boolean;
}

const SidebarLink = ({ isActive, href, children }: SidebarLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "cursor-pointer rounded-md px-2 py-2 text-sm text-neutral-500 hover:transition-colors hover:duration-300 hover:bg-neutral-100 hover:dark:bg-neutral-900",
        isActive &&
          "font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900"
      )}
    >
      {children}
    </Link>
  );
};

Sidebar.Section = SidebarSection;
Sidebar.Link = SidebarLink;

export default Sidebar;
