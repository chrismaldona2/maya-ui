import { ThemeProvider } from "next-themes";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" enableSystem>
      <SmoothScroll>{children}</SmoothScroll>
    </ThemeProvider>
  );
}
