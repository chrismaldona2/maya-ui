import { ReactNode } from "react";
import ThemeToggle from "./showcase/rotating-theme-toggle-tailwind";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ThemeToggle className="absolute top-0 left-0 m-5 size-8" />
      {children}
    </div>
  );
};

export default Layout;
