"use client";
import { AnimatePresence, domAnimation, LazyMotion, m } from "motion/react";
import Link from "next/link";
import { CloseIcon } from "@/components/icons";
import { ButtonHTMLAttributes, useRef } from "react";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useEscapeKeyPress } from "@/hooks/use-escape-key-press";
import { docsLinks } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";

const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(onClose, menuRef);
  useEscapeKeyPress(onClose);
  useLockBodyScroll(isOpen);

  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <LazyMotion features={domAnimation}>
          <m.div className="fixed flex items-start inset-0 z-9999">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75 }}
              className="absolute -z-10 inset-0 bg-black/10 backdrop-blur-xs"
            ></m.div>

            <m.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="bg-white dark:bg-neutral-900 relative py-10 px-8 shadow-lg inset-0 h-full w-3/4 sm:max-w-sm"
              ref={menuRef}
            >
              <div className="absolute top-4 right-3.5">
                <CloseButton onClick={onClose} aria-label="Close menu" />
              </div>
              <nav className="py-6">
                {docsLinks.map((section) => (
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
                            className="block font-medium text-sm text-neutral-500 py-2"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </m.div>
          </m.div>
        </LazyMotion>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MobileMenu;

const CloseButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      type="button"
      className={cn(
        "p-1.5 size-6 transition duration-300 cursor-pointer",
        "active:scale-95 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md",
        props.className
      )}
    >
      <CloseIcon className="text-neutral-500 size-3" />
    </button>
  );
};
