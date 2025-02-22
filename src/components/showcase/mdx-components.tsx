import dynamic from "next/dynamic";

export const mdxComponents = {
  UIVerseLink: dynamic(() => import("@/components/showcase/uiverse-link")),
  WavingHand: dynamic(() => import("@/components/showcase/waving-hand")),
  RotatingThemeToggle: dynamic(
    () => import("@/components/showcase/rotating-theme-toggle")
  ),
};
