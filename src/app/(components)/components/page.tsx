import DocBreadcrumb from "@/components/doc-breadcrumb";
import ScrollToTop from "@/components/layout/scroll-to-top";
import { allDocs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import {
  dynamicImports,
  mdxComponents,
} from "@/components/showcase/mdx-components";

const ComponentsPage = () => {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === "introduction");

  if (!doc) return <></>;

  const Content = getMDXComponent(doc.body.code);

  return (
    <>
      <ScrollToTop />
      <DocBreadcrumb section="Components" page={doc.title} />

      <h1 className="font-bold text-3xl md:text-4xl text-neutral-700 dark:text-neutral-300 mb-4">
        {doc.title}
      </h1>

      {doc.description && (
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          {doc.description}
        </p>
      )}

      <article className="mt-8 flex flex-col gap-8">
        <Content components={{ ...dynamicImports, ...mdxComponents }} />
      </article>
    </>
  );
};

export default ComponentsPage;
