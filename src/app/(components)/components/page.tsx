import { ArrowIcon } from "@/components/icons";
import ScrollToTop from "@/components/layout/scroll-to-top";
import { allDocs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import { notFound } from "next/navigation";

const Components = () => {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === "introduction");

  if (!doc) notFound();

  const Content = getMDXComponent(doc.body.code);

  return (
    <>
      <ScrollToTop />

      <div className="flex gap-2 text-sm items-center mb-4 cursor-default">
        <span className="text-neutral-500">Components</span>
        <ArrowIcon className="size-2.5 [&_path]:fill-neutral-500 flex-shrink-0" />
        <span className="font-medium">{doc.title}</span>
      </div>
      <h1 className="font-bold text-4xl text-neutral-700 dark:text-neutral-300 mb-6">
        {doc.title}
      </h1>
      <div
        className="text-lg [&_p]:mb-4 [&_p]:text-neutral-500 dark:[&_p]:text-neutral-400 [&_a]:font-semibold 
      [&_a]:bg-gradient-to-br [&_a]:from-[#8689f3] [&_a]:to-[#945abe] [&_a]:to-70% [&_a]:bg-clip-text [&_a]:text-transparent"
      >
        <Content />
      </div>
    </>
  );
};

export default Components;
