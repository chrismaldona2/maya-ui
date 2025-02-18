import Link from "next/link";
import { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

interface SidebarSectionProps extends SidebarProps {
  title: string;
}

interface SidebarLinkProps extends SidebarProps {
  href: string;
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <aside
      className="flex h-full flex-col gap-9 overflow-auto px-4 py-6 lg:py-8"
      role="navigation"
      aria-label="Sidebar Navigation"
    >
      {children}
    </aside>
  );
};

const SidebarSection = ({ title, children }: SidebarSectionProps) => {
  return (
    <section>
      <h2 className="mx-2 text-base font-semibold text-neutral-600 dark:text-gray-300 mb-0.5">
        {title}
      </h2>
      <div className="flex flex-col">{children}</div>
    </section>
  );
};

const SidebarLink = ({ href, children }: SidebarLinkProps) => {
  return (
    <Link
      href={href}
      className="cursor-pointer rounded-md px-2 py-2 text-sm text-neutral-500 transition-colors duration-300 hover:bg-neutral-100 hover:dark:bg-neutral-900"
    >
      {children}
    </Link>
  );
};

Sidebar.Section = SidebarSection;
Sidebar.Link = SidebarLink;

export default Sidebar;
