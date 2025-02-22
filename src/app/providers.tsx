import { ThemeProvider } from "next-themes";
import SmoothScroll from "@/components/layout/smooth-scroll";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem>
      <SmoothScroll root>{children}</SmoothScroll>
    </ThemeProvider>
  );
}
