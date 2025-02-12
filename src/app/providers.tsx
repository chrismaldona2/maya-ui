import { ThemeProvider } from "next-themes";
import SmoothScroll from "@/components/smooth-scroll";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SmoothScroll root>{children}</SmoothScroll>
    </ThemeProvider>
  );
}
