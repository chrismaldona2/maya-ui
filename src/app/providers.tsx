import { ThemeProvider } from "next-themes";
<<<<<<< Updated upstream
import SmoothScroll from "@/components/layout/smooth-scroll";
import { PropsWithChildren } from "react";
=======
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { ReactNode } from "react";
>>>>>>> Stashed changes

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" enableSystem>
      <SmoothScroll>{children}</SmoothScroll>
    </ThemeProvider>
  );
}
