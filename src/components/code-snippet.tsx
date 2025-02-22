"use client";
import useThemeSwitch from "@/hooks/use-theme-switch";
import SyntaxHighlighter from "react-syntax-highlighter";

import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import ComponentCard from "./component-card";
import CopyButton from "./copy-button";
import { cn } from "@/lib/utils";

export interface CodeSnippetProps {
  language: "typescript" | "javascript";
  code: string;
  className?: string;
}

const CodeSnippet = ({ language, code, className }: CodeSnippetProps) => {
  const { resolvedTheme } = useThemeSwitch();

  const style = resolvedTheme === "dark" ? atomOneDark : atomOneLight;

  const component = (
    <>
      <div
        className="h-full overflow-auto overscroll-contain text-xs md:text-base w-full"
        data-lenis-prevent
      >
        <SyntaxHighlighter
          language={language}
          style={style}
          customStyle={{
            padding: "1rem",
            borderRadius: 0,
            background: resolvedTheme === "dark" ? "transparent" : "#fff",
            width: "100%",
            height: "100%",
          }}
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
      </div>

      <CopyButton
        text={code}
        className="size-[2.65rem] absolute top-3 right-5 z-10"
      />
    </>
  );

  return (
    <ComponentCard
      className={cn("relative p-0", className)}
      component={component}
    ></ComponentCard>
  );
};

export default CodeSnippet;
