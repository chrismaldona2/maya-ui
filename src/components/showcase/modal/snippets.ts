import { MotionSnippets, HookSnippet } from "@/types/shared";

export const motionSnippets: MotionSnippets = {
  code: `
"use client";
import { cn } from "@/lib/utils";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useEscapeKeyPress } from "@/hooks/use-escape-key-press";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useIsMounted } from "@/hooks/use-is-mounted";
import {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
  useMemo,
  useRef,
} from "react";
import ReactDOM from "react-dom";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  Variants,
} from "motion/react";
import { cva } from "class-variance-authority";

type Placement =
  | "center"
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end";

const overlayVariants = cva(
  "fixed inset-0 backdrop-saturate-150 transition-opacity duration-300",
  {
    variants: {
      blur: {
        default: "backdrop-blur-sm",
        light: "backdrop-blur-xs",
        medium: "backdrop-blur-md",
        strong: "backdrop-blur-lg",
        none: "backdrop-blur-none",
      },
      opacity: {
        default: "bg-black/40",
        light: "bg-black/20",
        medium: "bg-black/50",
        dark: "bg-black/70",
        none: "bg-transparent",
      },
    },
    defaultVariants: {
      blur: "default",
      opacity: "default",
    },
  }
);

const contentVariants = cva("w-[95%] max-h-[95%] overflow-auto", {
  variants: {
    size: {
      sm: "max-w-[25rem] p-6",
      md: "max-w-[37.5rem] p-6",
      lg: "max-w-[50rem] p-8",
      full: "max-w-none p-8",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-xs",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-xs",
      base: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
    },
    theme: {
      light: "bg-neutral-100 text-neutral-900",
      dark: "bg-neutral-900 text-neutral-100",
      auto: "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100",
    },
  },
  defaultVariants: {
    size: "md",
    radius: "xl",
    shadow: "lg",
    theme: "auto",
  },
});

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  placement?: Placement;
  size?: "sm" | "md" | "lg" | "full";
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  shadow?: "none" | "sm" | "base" | "md" | "lg" | "xl";
  blur?: "default" | "light" | "medium" | "strong" | "none";
  overlayOpacity?: "default" | "light" | "medium" | "dark" | "none";
  contentTheme?: "light" | "dark" | "auto";
  closeButton?: ReactNode;
  showCloseButton?: boolean;
  className?: string;
  overlay?: boolean;
  overlayClassName?: string;
  closeButtonClassName?: string;
  container?: HTMLElement;
  zIndex?: number;
  preventScroll?: boolean;
  closeOnOutsideClick?: boolean;
  closeOnEscapeKeyPress?: boolean;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  animationVariants?: Variants;
  overlayAnimationVariants?: Variants;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  placement = "center",
  size,
  radius,
  shadow,
  blur,
  overlayOpacity,
  contentTheme,
  closeButton,
  showCloseButton = true,
  className,
  overlay = true,
  overlayClassName,
  closeButtonClassName,
  container,
  zIndex = 99999,
  preventScroll = true,
  closeOnOutsideClick = true,
  closeOnEscapeKeyPress = true,
  ariaLabelledby,
  ariaDescribedby,
  animationVariants = modalDefaultAnimation,
  overlayAnimationVariants = overlayDefaultAnimation,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // ↓ if you want these hooks I let their code below
  useClickOutside(closeOnOutsideClick ? onClose : undefined, modalRef);
  useEscapeKeyPress(closeOnEscapeKeyPress ? onClose : undefined);
  useLockBodyScroll(preventScroll ? isOpen : false);
  useFocusTrap(isOpen, modalRef);

  const modalPlacementStyle = useMemo(
    () => getPlacementStyle(placement),
    [placement]
  );

  // ↓ only required if you're using server components
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className={overlay ? "fixed inset-0" : ""} style={{ zIndex }}>
          <LazyMotion features={domAnimation}>
            {overlay && (
              <m.div
                className={cn(
                  overlayVariants({
                    blur: blur,
                    opacity: overlayOpacity,
                  }),
                  overlayClassName
                )}
                variants={overlayAnimationVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />
            )}

            <m.div
              className={cn(
                contentVariants({
                  size,
                  radius,
                  shadow,
                  theme: contentTheme,
                }),
                overlay ? "absolute" : "fixed",
                className
              )}
              ref={modalRef}
              variants={animationVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                willChange: "transform, opacity",
                ...modalPlacementStyle,
              }}
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

const overlayDefaultAnimation: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1, transition: { duration: 0.35 } },
};

const modalDefaultAnimation: Variants = {
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

const CloseButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      type="button"
      className={cn(
        "p-1.5 size-6 transition duration-300 cursor-pointer",
        "active:scale-95 hover:bg-black/5 dark:hover:bg-white/5 rounded-md",
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

type PlacementStyle = CSSProperties & {
  translateX?: string;
  translateY?: string;
};

const getPlacementStyle = (placement: Placement): PlacementStyle => {
  switch (placement) {
    case "center":
      return {
        top: "50%",
        left: "50%",
        translate: "-50% -50%",
      };
    case "top":
      return {
        top: 0,
        left: "50%",
        translateX: "-50%",
      };
    case "right":
      return {
        right: 0,
        top: "50%",
        translateY: "-50%",
      };
    case "bottom":
      return {
        bottom: 0,
        left: "50%",
        translateX: "-50%",
      };
    case "left":
      return {
        left: 0,
        top: "50%",
        translateY: "-50%",
      };
    case "top-start":
      return {
        top: 0,
        left: 0,
      };
    case "top-end":
      return {
        top: 0,
        right: 0,
      };
    case "bottom-start":
      return {
        bottom: 0,
        left: 0,
      };
    case "bottom-end":
      return {
        bottom: 0,
        right: 0,
      };
  }
};

`,
  usage: `
"use client";
import Button from "@/components/button";
import Modal from "@/components/modal";
import { useState } from "react";

const Demo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = () => {
    console.log("form submitted");
    closeModal();
  };

  return (
    <div>
      <Button onClick={openModal} className="bg-blue-600 dark:text-white">
        Open modal
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <TermsForm onSubmit={handleSubmit}/> // → here you can put what you want
      </Modal>
    </div>
  );
};


// ↓ example content

import Image from "next/image";

interface Form {
  onSubmit: () => void;
}

const TermsForm = ({ onSubmit }: Form) => {
  return (
    <div className="pt-7 pb-2 flex flex-col items-center gap-6">
      <Image
        src="/images/face-with-monocle.gif"
        alt="Thinking emoji"
        width={80}
        height={80}
        className="drop-shadow-lg"
      />
      <div>
        <h2 className="font-semibold text-2xl text-center mb-2">
          Temporibus sequi minus mollitia?
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-150 mx-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          dolorem eveniet omnis sequi praesentium vel officiis iure explicabo
          ipsam doloribus, sed quae nostrum odio mollitia aliquam.
        </p>
      </div>
      <Button
        onClick={onSubmit}
        className="min-w-[30%] bg-blue-600 dark:text-white"
      >
        Accept
      </Button>
    </div>
  );
};

export default Demo;
  `,
};

export const hooksSnippets: HookSnippet[] = [
  {
    id: 1,
    name: "use-click-outside",
    code: `
// detects clicks outside a specified element
"use client";
import { RefObject, useEffect } from "react";

export const useClickOutside = (
  onClickOutside?: () => void,
  ref?: RefObject<HTMLElement | null>
) => {
  useEffect(() => {
    if (!onClickOutside || !ref) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref, onClickOutside]);
};

`,
  },
  {
    id: 2,
    name: "use-escape-key-press",
    code: `
// detects when the 'Escape' key is pressed
"use client";
import { useEffect, RefObject } from "react";

export const useEscapeKeyPress = (
  callback?: () => void,
  ref?: RefObject<HTMLElement | null>
) => {
  useEffect(() => {
    if (!callback) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (ref && ref.current && document.activeElement === ref.current) {
          callback();
        } else if (!ref) {
          callback();
        }
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [callback, ref]);
};
    `,
  },
  {
    id: 3,
    name: "use-lock-body-scroll",
    code: `
// prevents scrolling on the body element
"use client";
import { useEffect } from "react";

export const useLockBodyScroll = (lock: boolean) => {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [lock]);
};    
`,
  },
  {
    id: 4,
    name: "use-focus-trap",
    code: `
// traps focus within a specified element
"use client";
import { RefObject, useEffect } from "react";

export const useFocusTrap = (
  isOpen: boolean,
  ref?: RefObject<HTMLElement | null>
) => {
  useEffect(() => {
    if (!isOpen || !ref?.current) return;

    const focusableElements = ref.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length > 0) {
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      firstElement.focus();

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener("keydown", handleTabKey);
      return () => document.removeEventListener("keydown", handleTabKey);
    }
  }, [isOpen, ref]);
};`,
  },
];

export const variantsCodeSnippet = `
// default
<Modal isOpen={isOpen} onClose={closeModal}>
  <Content/>
</Modal>


// no blur
<Modal isOpen={isOpen} onClose={closeModal} blur="none">
  <Content/>
</Modal>


// blur only
<Modal isOpen={isOpen} onClose={closeModal} overlayOpacity="none">
  <Content/>
</Modal>


// no overlay
<Modal isOpen={isOpen} onClose={closeModal} blur="none" overlayOpacity="none">
  <Content/>
</Modal>


// custom
<Modal isOpen={isOpen} onClose={closeModal}
  contentTheme="dark"
  className="bg-linear-to-br from-blue-950 to-blue-900"
  overlayClassName="bg-linear-to-tr from-blue-950/80 to-blue-900/30"
  closeButtonClassName="hover:bg-blue-800 dark:hover:bg-blue-800 text-neutral-100 dark:text-neutral-100"
>
  <Content/>
</Modal>


// custom 2 
<Modal isOpen={isOpen} onClose={closeModal}
  size="sm"
  className="m-4 border border-black/10"
  placement="bottom-start"
  overlay={false}
  preventScroll={false}
  closeOnOutsideClick={false}
>
  <Content/>
</Modal>
`;
