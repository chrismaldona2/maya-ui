import CenteredWrapper from "@/components/layout/centered-wrapper";
import Link from "next/link";
import { ReactNode } from "react";

const Components = ({ children }: { children: ReactNode }) => {
  return (
    <CenteredWrapper>
      <div className="sticky w-full grid md:grid-cols-[275px_minmax(0,1fr)] ">
        <div className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r border-neutral-200 dark:border-neutral-900 md:sticky md:block">
          <div className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <Sidebar>
              <Sidebar.Section title="Inputs">
                <Sidebar.Link href="/components">
                  Animated Search Box
                </Sidebar.Link>
              </Sidebar.Section>
              <Sidebar.Section title="Toggles">
                <Sidebar.Link href="/components">
                  Basic theme toggle
                </Sidebar.Link>
                <Sidebar.Link href="/components">
                  Rotating theme toggle
                </Sidebar.Link>
              </Sidebar.Section>
              <Sidebar.Section title="Decorators">
                <Sidebar.Link href="/components">Waving hand</Sidebar.Link>
              </Sidebar.Section>
              <Sidebar.Section title="Layout">
                <Sidebar.Link href="/components">Bento grid</Sidebar.Link>
              </Sidebar.Section>
            </Sidebar>
          </div>
        </div>
        {children}
      </div>
    </CenteredWrapper>
  );
};

export default Components;

const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <aside className="h-full overflow-auto py-6 px-4 lg:py-8 flex flex-col gap-8">
      {children}
    </aside>
  );
};

const SidebarSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section className="flex flex-col gap-1">
      <h2 className="text-base font-semibold text-neutral-600 dark:text-gray-300 mx-2">
        {title}
      </h2>
      <div className="flex flex-col">{children}</div>
    </section>
  );
};

const SidebarLink = ({
  children,
  href,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="text-sm text-neutral-500 hover:bg-neutral-100 hover:dark:bg-neutral-900 py-2 px-2 rounded-md cursor-pointer transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

Sidebar.Section = SidebarSection;
Sidebar.Link = SidebarLink;
