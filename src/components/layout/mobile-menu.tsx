"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { CloseIcon } from "@/components/ui/icons";
import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useEscapeKeyPress } from "@/hooks/useEscapeKeyPress";

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, onClose);
  useEscapeKeyPress(onClose);

  return (
    <motion.div className="fixed flex items-start inset-0 z-[9999]">
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
        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
        className="bg-white dark:bg-neutral-900 relative py-10 px-8 shadow-lg inset-0 h-full w-3/4 sm:max-w-sm"
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
                href="/components"
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

export default MobileMenu;
