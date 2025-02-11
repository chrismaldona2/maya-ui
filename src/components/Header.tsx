import Link from "next/link";
import { BearSvg } from "./SvgIcons";

const Header = () => {
  return (
    <>
      <div className="bg-neutral-900 text-slate-100 py-2.5 w-full text-center text-sm">
        Start searching components 👌🏼
      </div>
      <header className="bg-white/60 dark:bg-neutral-900/50 backdrop-blur-md flex flex-col mx-auto items-center sticky top-0">
        <div className="max-w-screen-xl px-4 py-4 w-full flex items-center gap-6 shadow-sm">
          <Link href="/" aria-label="Go to main page">
            <div className="bg-gradient-to-br from-[#2C2B2B] to-[#050505] p-1.5 rounded-md shadow-inner shadow-gray-50/5">
              <BearSvg className="size-5" />
            </div>
          </Link>

          <ul className="flex gap-5 text-sm">
            <li>
              <Link
                href="/"
                className="text-neutral-400 hover:text-neutral-800 transition-colors duration-300"
              >
                Components
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-neutral-400 hover:text-neutral-800 transition-colors duration-300"
              >
                Demos
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
