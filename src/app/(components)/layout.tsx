import CenteredWrapper from "@/components/centered-wrapper";
import Sidebar from "@/components/layout/sidebar";
import { ReactNode } from "react";
import { sidebarLinks } from "@/config/docs"; // Adjust the path as needed

const Components = ({ children }: { children: ReactNode }) => {
  return (
    <CenteredWrapper>
      <div className="grid w-full md:grid-cols-[300px_minmax(0,1fr)] lg:md:grid-cols-[280px_minmax(0,1fr)_10%]">
        <div className="hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r border-neutral-200 dark:border-neutral-900 md:sticky md:top-14 md:block">
          <ComponentSidebar />
        </div>
        <main className="flex-grow flex flex-col h-full py-12 md:py-8 px-2 md:px-14">
          {children}
        </main>

        <div className="hidden h-full border-l border-neutral-200 dark:border-neutral-900 lg:block"></div>
      </div>
    </CenteredWrapper>
  );
};

export default Components;

const ComponentSidebar = () => {
  return (
    <Sidebar>
      {sidebarLinks.map((section) => (
        <Sidebar.Section title={section.title} key={section.title}>
          {section.links.map((link) => (
            <Sidebar.Link href={link.href} key={link.href}>
              {link.label}
            </Sidebar.Link>
          ))}
        </Sidebar.Section>
      ))}
    </Sidebar>
  );
};
