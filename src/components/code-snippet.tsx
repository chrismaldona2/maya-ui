"use client";
import useTheme from "@/hooks/use-theme";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import ComponentCard from "./component-card";
import CopyButton from "./copy-button";
import { cn } from "@/lib/utils";
import { SupportedCodeLanguage } from "@/types/shared";
import { memo } from "react";

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
  const style = resolvedTheme === "dark" ? oneDark : oneLight;

  return (
    <ComponentCard className={cn("relative p-0 min-h-full", className)}>
      <div className="overflow-auto max-h-[700px] w-full">
        <div className="h-full text-sm md:text-base">
          <SyntaxHighlighter
            language={language}
            style={style}
            codeTagProps={{ style: { background: "transparent" } }}
            customStyle={{
              padding: "1.2rem",
              margin: 0,
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
      </div>
    </ComponentCard>
  );
};

export default memo(CodeSnippet);
