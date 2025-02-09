import { ThemeProvider } from "next-themes";
import SmoothScroll from "@/components/SmoothScroll";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SmoothScroll root>{children}</SmoothScroll>
    </ThemeProvider>
  );
}
