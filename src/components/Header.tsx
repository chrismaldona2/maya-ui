"use client";
import Link from "next/link";
import { BearSvg, MenuIcon } from "./icons";
import { useCallback, useState } from "react";
import { AnimatePresence } from "motion/react";
import ThemeToggle from "./theme-toggle";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import MobileMenu from "./mobile-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  useLockBodyScroll(isMenuOpen);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && <MobileMenu onClose={toggleMenu} />}
      </AnimatePresence>

      <div className="bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-800 text-slate-100 py-[0.6rem] w-full text-center text-sm dark:shadow-xl dark:shadow-neutral-800/30">
        ✨ Bring your UI to life with Maya UI
      </div>

      <header className="bg-white/80 dark:bg-neutral-950/20 backdrop-blur-md flex flex-col mx-auto items-center sticky top-0 shadow-sm dark:border-b border-neutral-900">
        <div className="max-w-screen-xl px-4 py-4 w-full flex items-center gap-6">
          <Logo />

          <nav>
            <ul className="hidden sm:flex gap-5 text-sm">
              <li>
                <Link
                  href="/"
                  className="p-1 text-neutral-400 hover:text-neutral-800 dark:text-gray-400 dark:hover:text-neutral-200 transition-colors duration-300"
                >
                  Components
                </Link>
              </li>
            </ul>
          </nav>

          <div className="ml-auto mr-2 flex gap-4">
            <ThemeToggle />
            <button
              className="sm:hidden"
              onClick={toggleMenu}
              aria-label="Open menu"
            >
              <MenuIcon className="[&_path]:fill-neutral-900 dark:[&_path]:fill-neutral-300" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

const Logo = () => {
  return (
    <Link href="/" aria-label="Go to main page">
      <div className="bg-gradient-to-br from-[#2C2B2B] to-[#050505] dark:from-neutral-900 dark:to-neutral-950 p-1.5 rounded-md shadow-inner shadow-gray-50/5">
        <BearSvg className="size-5" />
      </div>
    </Link>
  );
};
