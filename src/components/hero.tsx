import React from "react";
import { ArrowIcon, GithubIcon } from "./icons";
import { buttonVariants } from "./button";
import Link from "next/link";
import CenteredWrapper from "./layout/centered-wrapper";
import BlurredCircle from "./blurred-circle";

const Hero = () => {
  return (
    <CenteredWrapper className="relative">
      <BlurredCircle
        className="bg-purple-600/25 dark:bg-purple-600/15
      size-[250px] md:size-[350px] blur-[100px]
      -top-[85%] -left-[10%] md:-top-[90%]"
      />

      <BlurredCircle
        className="bg-pink-600/25 md:bg-pink-600/15 dark:bg-pink-600/15 
      h-[300px] w-[250px] md:h-[500px] md:w-[375px] blur-[125px]
      top-[125%] -right-[10%] "
      />

      <div className="py-8 flex flex-col items-center gap-5 text-center">
        <h1 className="text-6xl md:text-7xl font-bold bg-linear-to-br from-neutral-800 to-neutral-950 dark:from-neutral-50 dark:to-neutral-300 text-transparent bg-clip-text">
          Maya UI
        </h1>
        <div className="text-neutral-500 mb-4 text-base md:text-lg">
          <p>A free open-source collection of animated React components.</p>
          <p>Built with TypeScript, Tailwind CSS and Motion.</p>
        </div>
        <div className="flex flex-wrap gap-3 *:grow max-w-[80%] items-center">
          <Link
            href="/components"
            className={buttonVariants({
              variant: "filled",
              className:
                "bg-linear-to-br from-neutral-700 to-neutral-900 dark:from-white dark:to-zinc-200",
            })}
          >
            <span>Browse components</span>
            <ArrowIcon className="size-3 text-zinc-200 dark:text-neutral-500 shrink-0" />
          </Link>
          <a
            href="https://github.com/chrismaldona2/maya-ui"
            target="_blank"
            className={buttonVariants({
              variant: "outlined",
            })}
          >
            <GithubIcon className="size-4 text-neutral-950 dark:text-neutral-200 shrink-0" />
            <span>Star on Github</span>
          </a>
        </div>
      </div>
    </CenteredWrapper>
  );
};

export default Hero;
