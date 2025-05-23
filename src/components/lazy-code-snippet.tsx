"use client";
import { CodeSnippetProps } from "./code-snippet";
import dynamic from "next/dynamic";
import Loader from "./loader";

const CodeSnippet = dynamic(() => import("./code-snippet"), {
  loading: () => (
    <div className="py-12 flex justify-center">
      <Loader className="" />
    </div>
  ),
  ssr: false,
});

const LazyCodeSnippet = (props: CodeSnippetProps) => {
  return <CodeSnippet {...props} />;
};

export default LazyCodeSnippet;
