"use client";
import Link from "next/link";
import { BearSvg, CloseIcon, MenuIcon } from "./icons";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useClickOutside } from "@/hooks/useClickOutside";
import ThemeToggle from "./theme-toggle";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

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

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, onClose);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <motion.div className="fixed flex items-start inset-0 z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
        className="absolute -z-10 inset-0 bg-black/10 backdrop-blur-sm"
      ></motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className="bg-white dark:bg-neutral-800 relative py-10 px-8 shadow-lg inset-0 h-full w-3/4 sm:max-w-sm"
        ref={menuRef}
      >
        <div className="absolute top-4 right-3.5">
          <button onClick={onClose} className="p-2" aria-label="Close menu">
            <CloseIcon className="[&_path]:fill-neutral-500 size-3" />
          </button>
        </div>
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                onClick={onClose}
                className="font-semibold text-neutral-600 dark:text-neutral-300"
              >
                Components
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </motion.div>
  );
};
