"use client";
import Link from "next/link";
import { BearSvg, CloseIcon, MenuIcon } from "./icons";
import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useClickOutside } from "@/hooks/useClickOutside";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  useLockBodyScroll(isMenuOpen);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && <MobileMenu onClose={toggleMenu} />}
      </AnimatePresence>

      <div className="bg-neutral-900 text-slate-100 py-[0.6rem] w-full text-center text-sm">
        ✨ Bring your UI to life with Maya UI
      </div>
      <header className="bg-white/90 dark:bg-neutral-900/50 backdrop-blur-md flex flex-col mx-auto items-center sticky top-0">
        <div className="max-w-screen-xl px-4 py-4 w-full flex items-center gap-6 shadow-sm">
          <Logo />

          <ul className="hidden sm:flex gap-5 text-sm">
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

          <button className="sm:hidden ml-auto mr-2" onClick={toggleMenu}>
            <MenuIcon className="[&_path]:fill-neutral-900" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;

const Logo = () => {
  return (
    <Link href="/" aria-label="Go to main page">
      <div className="bg-gradient-to-br from-[#2C2B2B] to-[#050505] p-1.5 rounded-md shadow-inner shadow-gray-50/5">
        <BearSvg className="size-5" />
      </div>
    </Link>
  );
};

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, onClose);

  return (
    <motion.div className="fixed flex items-start top-0 left-0 w-screen h-screen z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
        className="absolute -z-10 bg-black/10 backdrop-blur-sm top-0 left-0 w-screen h-screen"
      ></motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className="bg-white relative py-10 px-8 p-6 shadow-lg inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm"
        ref={menuRef}
      >
        <div className="absolute top-4 right-3.5">
          <button onClick={onClose} className="p-2">
            <CloseIcon className="[&_path]:fill-neutral-500 size-3" />
          </button>
        </div>
        <ul>
          <li>
            <Link href="/">Components</Link>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};
