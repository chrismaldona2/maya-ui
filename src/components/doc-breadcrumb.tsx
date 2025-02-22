import React from "react";
import { ArrowIcon } from "./icons";

interface DocBreadcrumbProps {
  section: string;
  page: string;
}

const DocBreadcrumb = ({ section, page }: DocBreadcrumbProps) => {
  return (
    <div className="flex gap-2 text-sm items-center mb-4 cursor-default">
      <span className="text-neutral-500">{section}</span>
      <ArrowIcon className="size-2.5 [&_path]:fill-neutral-500 flex-shrink-0" />
      <span className="font-medium">{page}</span>
    </div>
  );
};

export default DocBreadcrumb;
