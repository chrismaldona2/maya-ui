import { allDocs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import { mdxComponents } from "@/components/showcase/mdx-components";
import ComponentContainer from "@/components/component-container";

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
      <h1 className="font-bold text-3xl text-neutral-700 dark:text-neutral-300 mb-3">
        {doc.title}
      </h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400">
        {doc.description}
      </p>

      <div className="mt-12">
        <h2 className="mb-2 font-medium text-neutral-500 dark:text-neutral-300">
          Preview
        </h2>
        <div className="overflow-clip min-h-[150px] py-10 px-4 flex justify-center items-center bg-neutral-200 dark:bg-[#131313] rounded-xl shadow-[inset_3px_2px_2px_rgba(200,200,200,.1)] dark:shadow-[inset_2px_2px_8px_rgba(40,44,44,0.1)]">
          <Content components={{ ComponentContainer, ...mdxComponents }} />
        </div>
      </div>
    </>
  );
};

export default ComponentInfo;
