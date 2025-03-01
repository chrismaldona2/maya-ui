import DocBreadcrumb from "@/components/doc-breadcrumb";
import { allDocs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import {
  mdxComponents,
  dynamicImports,
} from "@/components/showcase/mdx-components";
import DocNavigation from "@/components/layout/doc-navigation";
import DocNotFound from "@/components/doc-not-found";

const ComponentsPage = () => {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === "introduction");

  if (!doc) return <DocNotFound />;

  const Content = getMDXComponent(doc.body.code);

  return (
    <>
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

      <div className="mt-32">
        <DocNavigation currentPath="/components" />
      </div>
    </>
  );
};

export default ComponentsPage;
