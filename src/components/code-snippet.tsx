"use client";
import useTheme from "@/hooks/use-theme";
import SyntaxHighlighter from "react-syntax-highlighter";

import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import ComponentCard from "./component-card";
import CopyButton from "./copy-button";
import { cn } from "@/lib/utils";
import { SupportedCodeLanguage } from "@/types/shared";
import { NestedSmoothScroll } from "./layout/smooth-scroll";

export interface CodeSnippetProps {
  language: SupportedCodeLanguage;
  code: string;
  className?: string;
}

export interface CodeSnippetProps {
  language: SupportedCodeLanguage;
  code: string;
  className?: string;
  disableCopy?: boolean;
}

const CodeSnippet = ({
  language,
  code,
  className,
  disableCopy,
}: CodeSnippetProps) => {
  const { resolvedTheme, mounted } = useTheme();

  if (!mounted) return null;

  const style = resolvedTheme === "dark" ? atomOneDark : atomOneLight;

  const component = (
    <NestedSmoothScroll maxHeight="43.75rem">
      <div className="size-full text-sm md:text-base">
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
      {!disableCopy && (
        <CopyButton
          text={code}
          className="size-10 absolute top-3 right-5 z-10"
        />
      )}
    </NestedSmoothScroll>
  );

  return (
    <ComponentCard
      className={cn("relative p-0", className)}
      component={component}
    />
  );
};

export default CodeSnippet;
