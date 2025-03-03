"use client";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useEscapeKeyPress } from "@/hooks/use-escape-key-press";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode, useRef } from "react";
import ReactDOM from "react-dom";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  Variants,
} from "motion/react";
import { cva } from "class-variance-authority";

const overlayVariants = cva(
  "fixed inset-0 backdrop-saturate-150 transition-opacity duration-300",
  {
    variants: {
      blur: {
        default: "backdrop-blur",
        light: "backdrop-blur-sm",
        medium: "backdrop-blur-md",
        strong: "backdrop-blur-lg",
        none: "",
      },
      opacity: {
        default: "bg-black/40",
        light: "bg-black/20",
        medium: "bg-black/50",
        dark: "bg-black/70",
        none: "",
      },
    },
    defaultVariants: {
      blur: "default",
      opacity: "default",
    },
  }
);

const contentVariants = cva(
  "relative w-[92%] max-h-[95vh] rounded-xl overflow-auto shadow-lg dark:shadow-neutral-700/10",
  {
    variants: {
      size: {
        sm: "max-w-[25rem] p-6",
        md: "max-w-[37.5rem] p-6",
        lg: "max-w-[50rem] p-8",
        full: "max-w-none p-8",
      },
      theme: {
        light: "bg-neutral-100 text-neutral-900",
        dark: "bg-neutral-900 text-neutral-100",
        auto: "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100",
      },
    },
    defaultVariants: {
      size: "md",
      theme: "auto",
    },
  }
);

const overlayAnimation: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1, transition: { duration: 0.35 } },
};

const contentAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "full";
  blur?: "default" | "light" | "medium" | "strong" | "none";
  overlayOpacity?: "default" | "light" | "medium" | "dark" | "none";
  contentTheme?: "light" | "dark" | "auto";
  children: ReactNode;
  closeButton?: ReactNode;
  showCloseButton?: boolean;
  className?: string;
  overlayClassName?: string;
  closeButtonClassName?: string;
  container?: HTMLElement;
  zIndex?: number;
  closeOnOverlayClick?: boolean;
  closeOnEscapeKeyPress?: boolean;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
}

const Modal = ({
  isOpen,
  onClose,
  size,
  blur,
  overlayOpacity,
  contentTheme,
  children,
  closeButton,
  showCloseButton = true,
  className,
  overlayClassName,
  closeButtonClassName,
  container,
  zIndex = 99999,
  closeOnOverlayClick = true,
  closeOnEscapeKeyPress = true,
  ariaLabelledby,
  ariaDescribedby,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // ↓ if you want these hooks I let their code below
  useClickOutside(closeOnOverlayClick ? onClose : undefined, modalRef);
  useEscapeKeyPress(closeOnEscapeKeyPress ? onClose : undefined);
  useLockBodyScroll(isOpen);
  useFocusTrap(isOpen, modalRef);

  // ↓ only required if you're using server components
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex }}
        >
          <LazyMotion features={domAnimation}>
            <m.div
              className={cn(
                overlayVariants({
                  blur: blur,
                  opacity: overlayOpacity,
                }),
                overlayClassName
              )}
              variants={overlayAnimation}
              initial="hidden"
              animate="visible"
              exit="hidden"
            />
            <m.div
              className={cn(
                contentVariants({
                  size,
                  theme: contentTheme,
                }),
                className
              )}
              ref={modalRef}
              variants={contentAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ willChange: "transform, opacity" }}
              role="dialog"
              aria-modal="true"
              aria-labelledby={ariaLabelledby}
              aria-describedby={ariaDescribedby}
            >
              {showCloseButton &&
                (closeButton ?? (
                  <CloseButton
                    onClick={onClose}
                    aria-label="Close modal"
                    title="Close modal"
                    className={cn(
                      "absolute top-0 right-0 m-2.5",
                      closeButtonClassName
                    )}
                  />
                ))}
              {children}
            </m.div>
          </LazyMotion>
        </div>
      )}
    </AnimatePresence>,
    container || document.body
  );
};

export default Modal;

const CloseButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      type="button"
      className={cn(
        "p-1.5 size-6 transition duration-300",
        "active:scale-95 hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-md",
        props.className
      )}
    >
      <CloseIcon className="size-full" />
    </button>
  );
};

export const CloseIcon = (props: React.HTMLAttributes<SVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 9.70342L2.03802 15.6654C1.81496 15.8885 1.53105 16 1.18631 16C0.841571 16 0.557667 15.8885 0.3346 15.6654C0.111533 15.4423 0 15.1584 0 14.8137C0 14.4689 0.111533 14.185 0.3346 13.962L6.29658 8L0.3346 2.03802C0.111533 1.81496 0 1.53105 0 1.18631C0 0.841571 0.111533 0.557667 0.3346 0.3346C0.557667 0.111533 0.841571 0 1.18631 0C1.53105 0 1.81496 0.111533 2.03802 0.3346L8 6.29658L13.962 0.3346C14.185 0.111533 14.4689 0 14.8137 0C15.1584 0 15.4423 0.111533 15.6654 0.3346C15.8885 0.557667 16 0.841571 16 1.18631C16 1.53105 15.8885 1.81496 15.6654 2.03802L9.70342 8L15.6654 13.962C15.8885 14.185 16 14.4689 16 14.8137C16 15.1584 15.8885 15.4423 15.6654 15.6654C15.4423 15.8885 15.1584 16 14.8137 16C14.4689 16 14.185 15.8885 13.962 15.6654L8 9.70342Z"
        fill="currentColor"
      />
    </svg>
  );
};
