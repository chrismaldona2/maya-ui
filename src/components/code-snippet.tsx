"use client";
import { memo, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import useTheme from "@/hooks/use-theme";
import ComponentCard from "./component-card";
import CopyButton from "./copy-button";
import { cn } from "@/lib/utils";
import { SupportedCodeLanguage } from "@/types/shared";
import VirtualizedCodeRenderer from "./virtualized-code-renderer";
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("bash", bash);

export interface CodeSnippetProps {
  language: SupportedCodeLanguage;
  code: string;
  className?: string;
  disableCopy?: boolean;
  maxHeight?: number;
}

const CodeSnippet = ({
  language,
  code,
  className,
  disableCopy = false,
  maxHeight = 700,
}: CodeSnippetProps) => {
  const { resolvedTheme, mounted } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const trimmedCode = code.trim();
  const lineCount = trimmedCode.split("\n").length;

  const virtualizer = useVirtualizer({
    count: lineCount,
    estimateSize: () => 24,
    getScrollElement: () => scrollRef.current,
    overscan: 6,
  });
  const virtualItems = virtualizer.getVirtualItems();

  if (!mounted) return null;

  const style = resolvedTheme === "dark" ? oneDark : oneLight;
  const isDarkTheme = resolvedTheme === "dark";

  return (
    <ComponentCard className={cn("relative p-0 min-h-full", className)}>
      <div
        className="overflow-auto w-full"
        ref={scrollRef}
        style={{ maxHeight: `${maxHeight}px` }}
        role="code"
      >
        <SyntaxHighlighter
          language={language}
          style={style}
          customStyle={{
            position: "relative",
            height: `${virtualizer.getTotalSize() + 50}px`,
            padding: "1.2rem",
            margin: 0,
            borderRadius: 0,
            background: isDarkTheme ? "transparent" : "#fff",
            width: "100%",
          }}
          codeTagProps={{
            style: { background: "transparent" },
            className: "text-sm md:text-base",
          }}
          wrapLongLines
          renderer={({ rows, stylesheet, useInlineStyles }) => (
            <VirtualizedCodeRenderer
              rows={rows}
              stylesheet={stylesheet}
              useInlineStyles={useInlineStyles}
              virtualItems={virtualItems}
              virtualizer={virtualizer}
            />
          )}
        >
          {trimmedCode}
        </SyntaxHighlighter>

        {!disableCopy && (
          <CopyButton
            text={trimmedCode}
            className="size-10 absolute top-3 right-5 z-10"
            aria-label="Copy code to clipboard"
            title="Copy code to clipboard"
          />
        )}
      </div>
    </ComponentCard>
  );
};

export default memo(CodeSnippet);
