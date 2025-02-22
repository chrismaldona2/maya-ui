import DocBreadcrumb from "@/components/doc-breadcrumb";
import ScrollToTop from "@/components/layout/scroll-to-top";
import { allDocs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";

const ComponentsPage = () => {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === "introduction");

  if (!doc) return <></>;

  const Content = getMDXComponent(doc.body.code);

  return (
    <>
      <ScrollToTop />
      <DocBreadcrumb section="Components" page={doc.title} />

      <h1 className="font-bold text-3xl md:text-4xl text-neutral-700 dark:text-neutral-300 mb-6">
        {doc.title}
      </h1>
      <div className="text-lg text-neutral-500 dark:text-neutral-400 flex flex-col gap-4">
        <Content components={{ UiVerseLink }} />
      </div>
    </>
  );
};

export default ComponentsPage;

export const UiVerseLink = () => {
  return (
    <a
      className="font-semibold bg-gradient-to-br from-[#8689f3] to-[#945abe] to-70% bg-clip-text text-transparent"
      href="https://uiverse.io/"
      target="_blank"
      rel="noopener noreferrer"
    >
      UIVerse
    </a>
  );
};
