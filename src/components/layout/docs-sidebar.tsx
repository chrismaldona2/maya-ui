"use client";
import { usePathname } from "next/navigation";
import Sidebar from "./sidebar";
import { sidebarLinks } from "@/config/navigation";

const DocsSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar>
      {sidebarLinks.map((section) => (
        <Sidebar.Section title={section.title} key={section.title}>
          {section.links.map((link) => (
            <Sidebar.Link
              href={link.href}
              key={link.href}
              isActive={link.href === pathname}
            >
              {link.label}
            </Sidebar.Link>
          ))}
        </Sidebar.Section>
      ))}
    </Sidebar>
  );
};

export default DocsSidebar;
