import dynamic from "next/dynamic";

export const mdxComponents = {
  WavingHand: dynamic(() => import("@/components/showcase/waving-hand")),
  RotatingThemeToggle: dynamic(
    () => import("@/components/showcase/rotating-theme-toggle")
  ),
};
