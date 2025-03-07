"use client";
import { cn } from "@/lib/utils";
import { CSSProperties, ReactNode, useId, useMemo } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  Variants,
  AnimatePresence,
} from "motion/react";
import { cva } from "class-variance-authority";
import { useTooltip } from "@/hooks/use-tooltip";

type Placement =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "top-start"
  | "top-end"
  | "right-start"
  | "right-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end";

const tooltipVariants = cva(
  "absolute inline-block cursor-default min-w-full w-max bg-primary py-2 px-3.5 text-primary-foreground z-20",
  {
    variants: {
      radius: {
        none: "rounded-none",
        sm: "rounded-xs",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      radius: "md",
    },
  }
);

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  className?: string;
  placement?: Placement;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  openDelay?: number;
  exitDelay?: number;
  showArrow?: boolean;
  arrowClassName?: string;
  animationVariants?: Variants;
  disabled?: boolean;
  isOpen?: boolean;
  disableUseSelect?: boolean;
  offset?: number;
}

const Tooltip = ({
  children,
  content,
  className,
  placement = "bottom",
  radius,
  openDelay = 200,
  exitDelay = 750,
  showArrow,
  arrowClassName,
  animationVariants = defaultAnimation,
  disabled,
  isOpen,
  disableUseSelect,
  offset = 8,
}: TooltipProps) => {
  const tooltipId = useId(); // → for accessibility purposes
  const { isVisible, show, hide, toggle } = useTooltip(
    openDelay,
    exitDelay,
    isOpen
  );

  const placementConfig = useMemo(
    () => generatePlacementConfig(offset),
    [offset]
  );

  if (disabled) return <>{children}</>;

  return (
    <div
      className="relative inline-block"
      aria-labelledby={isVisible ? tooltipId : undefined}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onTouchStart={toggle}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <LazyMotion features={domAnimation}>
            <m.div
              className={cn(
                tooltipVariants({ radius }),
                { "select-none": disableUseSelect },
                className
              )}
              id={tooltipId}
              role="tooltip"
              variants={animationVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={placementConfig[placement].style}
            >
              <div className="relative z-10">{content}</div>
              {showArrow && (
                <TooltipArrow
                  placement={placementConfig[placement].arrowPlacement}
                  className={arrowClassName}
                />
              )}
            </m.div>
          </LazyMotion>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;

interface PlacementConfig {
  [key: string]: {
    style: CSSProperties & { translateX?: string; translateY?: string };
    arrowPlacement: TooltipArrowProps["placement"];
  };
}

const generatePlacementConfig = (offset: number): PlacementConfig => {
  return {
    top: {
      style: {
        bottom: `calc(100% + ${offset}px)`,
        left: "50%",
        translateX: "-50%",
        transformOrigin: "bottom",
      },
      arrowPlacement: "bottom",
    },
    right: {
      style: {
        left: `calc(100% + ${offset}px)`,
        top: "50%",
        translateY: "-50%",
        transformOrigin: "left",
      },
      arrowPlacement: "left",
    },
    bottom: {
      style: {
        top: `calc(100% + ${offset}px)`,
        left: "50%",
        translateX: "-50%",
        transformOrigin: "top",
      },
      arrowPlacement: "top",
    },
    left: {
      style: {
        right: `calc(100% + ${offset}px)`,
        top: "50%",
        translateY: "-50%",
        transformOrigin: "right",
      },
      arrowPlacement: "right",
    },

    "top-start": {
      style: {
        bottom: `calc(100% + ${offset}px)`,
        left: "0",
        transformOrigin: "bottom left",
      },
      arrowPlacement: "bottom-start",
    },
    "top-end": {
      style: {
        bottom: `calc(100% + ${offset}px)`,
        right: "0",
        transformOrigin: "bottom right",
      },
      arrowPlacement: "bottom-end",
    },

    "right-start": {
      style: {
        left: `calc(100% + ${offset}px)`,
        top: "0",
        transformOrigin: "top left",
      },
      arrowPlacement: "left-start",
    },
    "right-end": {
      style: {
        left: `calc(100% + ${offset}px)`,
        bottom: "0",
        transformOrigin: "bottom left",
      },
      arrowPlacement: "left-end",
    },

    "bottom-start": {
      style: {
        top: `calc(100% + ${offset}px)`,
        left: "0",
        transformOrigin: "top left",
      },
      arrowPlacement: "top-start",
    },
    "bottom-end": {
      style: {
        top: `calc(100% + ${offset}px)`,
        right: "0",
        transformOrigin: "top right",
      },
      arrowPlacement: "top-end",
    },

    "left-start": {
      style: {
        right: `calc(100% + ${offset}px)`,
        top: "0",
        transformOrigin: "top right",
      },
      arrowPlacement: "right-start",
    },
    "left-end": {
      style: {
        right: `calc(100% + ${offset}px)`,
        bottom: "0",
        transformOrigin: "bottom right",
      },
      arrowPlacement: "right-end",
    },
  };
};

interface TooltipArrowProps {
  placement?: Placement;
  className?: string;
}

const tooltipArrowVariants = cva("absolute inline-block w-0 h-0 ", {
  variants: {
    placement: {
      top: "bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-current",

      right:
        "left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-current",

      bottom:
        "top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-current",

      left: "right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-current",

      "top-start":
        "bottom-full left-3 border-8 border-transparent border-b-current",
      "top-end":
        "bottom-full right-3 border-8 border-transparent border-b-current",

      "right-start":
        "left-full top-3 border-8 border-transparent border-l-current",
      "right-end":
        "left-full bottom-3 border-8 border-transparent border-l-current",

      "bottom-start":
        "top-full left-3 border-8 border-transparent border-t-current",
      "bottom-end":
        "top-full right-3 border-8 border-transparent border-t-current",

      "left-start":
        "right-full top-3 border-8 border-transparent border-r-current",
      "left-end":
        "right-full bottom-3 border-8 border-transparent border-r-current",
    },
  },
});

const TooltipArrow = ({ placement, className }: TooltipArrowProps) => {
  return <div className={cn(tooltipArrowVariants({ placement }), className)} />;
};

const defaultAnimation: Variants = {
  hidden: {
    visibility: "hidden",
    opacity: 0,
    scale: 0.8,
    transition: { type: "spring", duration: 0.4 },
  },
  visible: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    transition: { type: "spring", duration: 0.5 },
  },
};
