"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { CloseIcon } from "@/components/icons";
import { useRef } from "react";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useEscapeKeyPress } from "@/hooks/use-escape-key-press";
import { sidebarLinks } from "@/config/navigation";

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(onClose, menuRef);
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
            <CloseIcon className="text-neutral-500 size-3" />
          </button>
        </div>
        <nav className="py-6">
          {sidebarLinks.map((section) => (
            <div key={section.title} className="mb-7">
              <h3 className="font-semibold text-neutral-600 dark:text-neutral-300">
                {section.title}
              </h3>
              <ul className="flex flex-col">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className=" block font-medium text-sm text-neutral-500 py-2"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
