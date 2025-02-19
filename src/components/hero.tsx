import React from "react";
import { ArrowIcon, GithubIcon } from "./icons";
import { buttonVariants } from "./button";
import Link from "next/link";
import CenteredWrapper from "./centered-wrapper";

const Hero = () => {
  return (
    <CenteredWrapper>
      <div className="py-4 flex flex-col items-center gap-5 text-center">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-neutral-800 to-neutral-950 dark:from-neutral-50 dark:to-neutral-300 text-transparent bg-clip-text">
          Maya UI
        </h1>
        <div className="text-neutral-500 mb-4 text-base md:text-lg">
          <p>A free open-source collection of animated React components.</p>
          <p>Built with Tailwind CSS and Motion.</p>
        </div>
        <div className="flex flex-wrap gap-3 [&_>*]:flex-grow max-w-[80%] items-center">
          <Link
            href="/components"
            className={buttonVariants({
              variant: "filled",
            })}
          >
            <span>Browse components</span>
            <ArrowIcon className="size-3 [&_path]:fill-zinc-200 dark:[&_path]:fill-neutral-500 flex-shrink-0" />
          </Link>
          <a
            href="https://github.com/chrismaldona2/maya-ui"
            target="_blank"
            className={buttonVariants({
              variant: "outlined",
            })}
          >
            <GithubIcon className="size-4 [&_path]:fill-neutral-950 dark:[&_path]:fill-neutral-200 flex-shrink-0" />
            <span>Star on Github</span>
          </a>
        </div>
      </div>
    </CenteredWrapper>
  );
};

export default Hero;
