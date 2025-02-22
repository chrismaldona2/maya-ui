import { allDocs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import { mdxComponents } from "@/components/showcase/mdx-components";
import ContainerWithTabs, {
  ContainerWithTabsProps,
} from "@/components/container-with-tabs";
import ComponentCard from "@/components/component-card";
import ScrollToTop from "@/components/layout/scroll-to-top";
import DocBreadcrumb from "@/components/doc-breadcrumb";
import CodeSnippet, { CodeSnippetProps } from "@/components/code-snippet";

export const generateStaticParams = async () =>
  allDocs.map((doc) => ({ slug: doc._raw.flattenedPath }));

const components = {
  ContainerWithTabs: (props: ContainerWithTabsProps) => (
    <ContainerWithTabs {...props} innerContainerClassname="py-5 px-[1.15rem]" />
  ),
  CodeSnippet: (props: CodeSnippetProps) => (
    <CodeSnippet {...props} className="h-[700px] " />
  ),
};

const ComponentInfo = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

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
      <p className="text-lg text-neutral-600 dark:text-neutral-400">
        {doc.description}
      </p>
      <div className="mt-10">
        <Content
          components={{ ComponentCard, ...components, ...mdxComponents }}
        />
      </div>
    </>
  );
};

export default ComponentInfo;
