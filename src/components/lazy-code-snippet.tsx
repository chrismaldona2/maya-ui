"use client";
import { CodeSnippetProps } from "./code-snippet";
import dynamic from "next/dynamic";
import Loader from "./loader";

const CodeSnippet = dynamic(() => import("./code-snippet"), {
  loading: () => <Loader className="my-12" />,
  ssr: false,
});

const LazyCodeSnippet = (props: CodeSnippetProps) => {
  return <CodeSnippet {...props} />;
};

export default LazyCodeSnippet;
