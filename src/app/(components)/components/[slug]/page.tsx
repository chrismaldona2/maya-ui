import { allDocs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import {
  mdxComponents,
  dynamicImports,
} from "@/components/showcase/mdx-components";
import ScrollToTop from "@/components/layout/scroll-to-top";
import DocBreadcrumb from "@/components/doc-breadcrumb";
import DocNavigation from "@/components/layout/doc-navigation";

export const generateStaticParams = async () =>
  allDocs.map((doc) => ({ slug: doc._raw.flattenedPath }));

const ComponentInfo = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const currentPath = `/components/${slug}`;
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === slug);
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

      <article className="mt-7 flex flex-col gap-14">
        <Content components={{ ...dynamicImports, ...mdxComponents }} />
      </article>

      <div className="mt-20">
        <DocNavigation currentPath={currentPath} />
      </div>
    </>
  );
};

export default ComponentInfo;
