import { ArrowIcon, BearSvg, StarIcon } from "@/components/SvgIcons";

const Home = () => {
  return (
    <div className="min-h-screen grid place-content-center">
      <div className="text-center flex flex-col gap-4 items-center">
        <div className="bg-neutral-900 p-3 rounded-xl">
          <BearSvg className="size-16" />
        </div>
        <h1 className="text-3xl font-bold text-zinc-900 ">Maya UI</h1>
        <div className="text-neutral-500">
          <p>Free open-source React animated component collection.</p>
          <p>Made with Tailwind CSS and Motion.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2.5 bg-neutral-900 text-neutral-50 py-2 px-4 rounded-md select-none hover:scale-[103%] active:scale-100 transition-all">
            <span>Browse components</span>
            <ArrowIcon className="size-3 [&_path]:fill-zinc-200" />
          </button>
          <button className="flex items-center gap-2.5 bg-white text-zinc-900 py-2 px-4 border border-zinc-950 rounded-md select-none hover:scale-[103%] active:scale-100 transition-all">
            <span>Star on Github</span>

            <StarIcon className="size-3.5 [&_path]:fill-zinc-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
