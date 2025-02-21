import { allDocs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import { mdxComponents } from "@/components/showcase/mdx-components";
import ContainerWithTabs from "@/components/container-with-tabs";
import ComponentCard from "@/components/component-card";
import { ArrowIcon } from "@/components/icons";
import ScrollToTop from "@/components/layout/scroll-to-top";

export const generateStaticParams = async () =>
  allDocs.map((doc) => ({ slug: doc._raw.flattenedPath }));

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
      <div className="flex gap-2 text-sm items-center mb-4 cursor-default">
        <span className="text-neutral-500">Components</span>
        <ArrowIcon className="size-2.5 [&_path]:fill-neutral-500 flex-shrink-0" />
        <span className="font-medium">{doc.title}</span>
      </div>

      <h1 className="font-bold text-4xl text-neutral-700 dark:text-neutral-300 mb-5">
        {doc.title}
      </h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400">
        {doc.description}
      </p>

      <div className="mt-10">
        <Content
          components={{ ComponentCard, ContainerWithTabs, ...mdxComponents }}
        />
      </div>
    </>
  );
};

export default ComponentInfo;
