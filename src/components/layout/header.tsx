"use client";
import Link from "next/link";
import { MenuIcon } from "@/components/icons";
import { useCallback, useState } from "react";
import { AnimatePresence } from "motion/react";
import ThemeToggle from "@/components/theme-toggle";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import MobileMenu from "@/components/layout/mobile-menu";
import Logo from "@/components/logo";
import CenteredWrapper from "@/components/layout/centered-wrapper";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  useLockBodyScroll(isMenuOpen);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && <MobileMenu onClose={toggleMenu} />}
      </AnimatePresence>

      <div className="bg-linear-to-r from-[#ffffff] to-[#e8e5eb] dark:from-[#0a0a0a] dark:to-[#1b1b1c] text-neutral-800 dark:text-slate-100 py-[0.6rem] w-full text-center text-sm shadow-xs shadow-neutral-800/10 z-60">
        ✨ Bring your website to life with Maya UI
      </div>

      <header className="w-full z-50 bg-white/75 dark:bg-neutral-950/85 backdrop-blur-md flex flex-col mx-auto items-center sticky top-0 border-b border-neutral-300 dark:border-neutral-900">
        <CenteredWrapper>
          <div className="py-4 w-full flex items-center gap-8">
            <Logo redirectToMainPage />

            <nav>
              <ul className="hidden sm:flex gap-5 text-sm">
                <li>
                  <Link
                    href="/components"
                    className="p-1 font-medium text-neutral-400 hover:text-neutral-800 dark:text-gray-400 dark:hover:text-neutral-200 transition-colors duration-300"
                  >
                    Components
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="ml-auto flex gap-4">
              <ThemeToggle />
              <button
                className="sm:hidden cursor-pointer"
                onClick={toggleMenu}
                aria-label="Open menu"
              >
                <MenuIcon className="[&_path]:fill-neutral-900 dark:[&_path]:fill-neutral-300" />
              </button>
            </div>
          </div>
        </CenteredWrapper>
      </header>
    </>
  );
};

export default Header;
