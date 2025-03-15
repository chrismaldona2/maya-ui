"use client";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useEscapeKeyPress } from "@/hooks/use-escape-key-press";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { cn } from "@/lib/utils";
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
