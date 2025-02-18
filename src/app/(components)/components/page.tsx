import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";

const Components = async () => {
  const content = await fs.readFile(
    path.join(process.cwd(), "src/docs", `introduction.mdx`),
    "utf-8"
  );

  interface Frontmatter {
    title: string;
    location: string;
  }

  const data = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });

  return (
    <>
      <h1 className="font-bold text-3xl text-neutral-700 dark:text-neutral-300 mb-6">
        {data.frontmatter.title}
      </h1>
      <div
        className="text-lg [&_p]:mb-4 [&_p]:text-neutral-500 dark:[&_p]:text-neutral-400 [&_a]:font-semibold 
      [&_a]:bg-gradient-to-br [&_a]:from-[#8689f3] [&_a]:to-[#945abe] [&_a]:to-70% [&_a]:bg-clip-text [&_a]:text-transparent"
      >
        {data.content}
      </div>
    </>
  );
};

export default Components;
