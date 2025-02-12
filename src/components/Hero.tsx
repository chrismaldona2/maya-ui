import React from "react";
import { ArrowIcon, GithubIcon } from "./icons";
import { Button } from "./button";

const Hero = () => {
  return (
    <div className=" flex flex-col items-center gap-5 px-7 pb-8 md:items-center md:px-10 text-center">
      <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-neutral-800 to-neutral-950 text-transparent bg-clip-text">
        Maya UI
      </h1>
      <div className="text-neutral-500 mb-4 text-base md:text-lg">
        <p>Free open-source React animated component collection.</p>
        <p>Made with Tailwind CSS and Motion.</p>
      </div>
      <div className="flex flex-wrap gap-3 [&_>*]:flex-grow">
        <Button variant="dark">
          <span>Browse components</span>
          <ArrowIcon className="size-3 [&_path]:fill-zinc-200 flex-shrink-0" />
        </Button>
        <a
          href="https://github.com/chrismaldona2/maya-ui"
          target="_blank"
          className="[&_>button]:w-full"
        >
          <Button variant="light">
            <GithubIcon className="size-4 [&_path]:fill-neutral-950 flex-shrink-0" />
            <span>Star on Github</span>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
