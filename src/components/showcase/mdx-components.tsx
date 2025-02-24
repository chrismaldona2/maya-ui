import dynamic from "next/dynamic";
import ContainerWithTabs, {
  ContainerWithTabsProps,
} from "../container-with-tabs";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";
import CodeSnippet, { CodeSnippetProps } from "../code-snippet";

export const dynamicImports = {
  WavingHand: dynamic(() => import("@/components/showcase/waving-hand")),
  RotatingThemeToggleMotion: dynamic(
    () => import("@/components/showcase/rotating-theme-toggle-motion")
  ),
  RotatingThemeToggleTailwind: dynamic(
    () => import("@/components/showcase/rotating-theme-toggle-tailwind")
  ),
};

export const mdxComponents = {
  ContainerWithTabs: (props: ContainerWithTabsProps) => (
    <ContainerWithTabs
      {...props}
      className="mt-5"
      innerContainerClassname="py-5 px-[1.15rem]"
    />
  ),
  CodeSnippet: (props: CodeSnippetProps) => (
    <CodeSnippet {...props} className="mb-2" />
  ),
  UIVerseLink: () => (
    <a
      className="font-semibold bg-gradient-to-br from-[#8689f3] to-[#945abe] to-70% bg-clip-text text-transparent"
      href="https://uiverse.io/"
      target="_blank"
    >
      UIVerse
    </a>
  ),

  Note: ({ children }: PropsWithChildren) => (
    <aside className="my-5 p-4 rounded-md bg-neutral-200 text-neutral-700 dark:bg-neutral-850 dark:text-neutral-400">
      {children}
    </aside>
  ),
  WelcomeMessage: ({ children }: PropsWithChildren) => (
    <div className="mb-4 flex flex-wrap gap-2 items-center text-2xl font-semibold text-neutral-700 dark:text-neutral-100">
      {children}
    </div>
  ),
  ul: ({ children }: PropsWithChildren) => (
    <ul className="flex flex-col gap-1.5 list-inside list-disc marker:text-neutral-950 dark:marker:text-neutral-500">
      {children}
    </ul>
  ),
  li: ({ children }: PropsWithChildren) => (
    <li className="text-base/[185%] sm:text-base/[175%] text-neutral-600 dark:text-neutral-300">
      {children}
    </li>
  ),
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="underline underline-offset-[3px] text-neutral-700 dark:text-white"
      target="_blank"
      {...props}
    >
      {props.children}
    </a>
  ),
  h2: ({ children }: PropsWithChildren) => (
    <h2 className="text-xl md:text-2xl font-semibold text-neutral-700 dark:text-neutral-100 mb-3">
      {children}
    </h2>
  ),
  p: ({ children }: PropsWithChildren) => (
    <p className="text-base text-neutral-600 dark:text-[#adadad] my-3.5">
      {children}
    </p>
  ),
};
