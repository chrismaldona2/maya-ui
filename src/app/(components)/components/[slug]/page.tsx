import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";

interface Frontmatter {
  title: string;
  location: string;
  description: string;
}

const ComponentInfo = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug: component } = await params;

  const content = await fs.readFile(
    path.join(process.cwd(), "src/docs/components", `${component}.mdx`),
    "utf-8"
  );

  const data = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });

  return (
    <>
      <div>
        <h1 className="font-bold text-3xl text-neutral-700 dark:text-neutral-300 mb-2">
          {data.frontmatter.title}
        </h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400">
          {data.frontmatter.description}
        </p>
      </div>
    </>
  );
};

export default ComponentInfo;
