"use client";
import { cn } from "@/lib/utils";
import {
  CSSProperties,
  ReactNode,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  Variants,
  AnimatePresence,
} from "motion/react";
import { cva } from "class-variance-authority";
import { useTooltip } from "@/hooks/use-tooltip";
import { useClickOutside } from "@/hooks/use-click-outside";

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
  "cursor-default min-w-full w-max bg-primary py-2 px-3.5 text-primary-foreground z-20",
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
  offset?: number;
  openDelay?: number;
  exitDelay?: number;
  showArrow?: boolean;
  arrowColor?: string;
  arrowClassName?: string;
  animationVariants?: Variants;
  disabled?: boolean;
  isOpen?: boolean;
  disableUserSelect?: boolean;
}

const Tooltip = ({
  children,
  content,
  className,
  placement = "bottom",
  radius,
  offset = 8,
  openDelay = 200,
  exitDelay = 750,
  showArrow = false,
  arrowColor,
  arrowClassName,
  animationVariants = defaultAnimation,
  disabled = false,
  isOpen = false,
  disableUserSelect = false,
}: TooltipProps) => {
  const tooltipId = useId(); // → for accessibility purposes
  const { isVisible, show, hide, toggle, hideInstantly } = useTooltip(
    openDelay,
    exitDelay,
    isOpen
  );

  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(isOpen ? undefined : hideInstantly, containerRef);

  // ↓ calculates the CSS positioning and arrow placement based on the specified placement and offset
  const placementConfig = useMemo(
    () => getPlacementConfig(placement, offset),
    [placement, offset]
  );

  // ↓ gets the color of the tooltip so the arrow can match it in case no arrowColor is provided
  const [computedBgColor, setComputedBgColor] = useState("transparent");
  const setTooltipRef = useCallback((node: HTMLDivElement) => {
    if (node) {
      const bgColor = window.getComputedStyle(node).backgroundColor;
      setComputedBgColor(bgColor);
    }
  }, []);

  if (disabled) return <>{children}</>;

  return (
    <div
      ref={containerRef}
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
        {isVisible ? (
          <LazyMotion features={domAnimation}>
            <m.div
              className="absolute inline-block isolate z-20"
              variants={animationVariants}
              id={tooltipId}
              role="tooltip"
              initial="hidden"
              animate="visible"
              exit="hidden"
              // ↓ placement set with style attribute so Motion handles it correctly
              style={placementConfig.style}
            >
              <div
                ref={setTooltipRef}
                className={cn(
                  tooltipVariants({ radius }),
                  { "select-none": disableUserSelect },
                  className
                )}
              >
                {content}
              </div>

              {showArrow && (
                <TooltipArrow
                  placement={placementConfig.arrowPlacement}
                  className={arrowClassName}
                  color={arrowColor || computedBgColor}
                />
              )}
            </m.div>
          </LazyMotion>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;

interface TooltipArrowProps {
  placement?: Placement;
  className?: string;
  color?: string;
}

const tooltipArrowVariants = cva("absolute size-2.5 rotate-45 -z-10", {
  variants: {
    placement: {
      top: "bottom-full left-1/2 -translate-x-1/2 translate-y-1/2",
      bottom: "top-full left-1/2 -translate-x-1/2 -translate-y-1/2",
      right: "left-full top-1/2 -translate-y-1/2 -translate-x-1/2",
      left: "right-full top-1/2 -translate-y-1/2 translate-x-1/2",
      "top-start": "bottom-full left-3 translate-y-1/2",
      "top-end": "bottom-full right-3 translate-y-1/2",
      "bottom-start": "top-full left-3 -translate-y-1/2",
      "bottom-end": "top-full right-3 -translate-y-1/2",
      "right-start": "left-full top-3 -translate-x-1/2",
      "right-end": "left-full bottom-3 -translate-x-1/2",
      "left-start": "right-full top-3 translate-x-1/2",
      "left-end": "right-full bottom-3 translate-x-1/2",
    },
  },
});

const TooltipArrow = ({ placement, color, className }: TooltipArrowProps) => {
  return (
    <div
      className={cn(tooltipArrowVariants({ placement }), className)}
      style={{ background: color }}
    />
  );
};

// ↓ logic to get the correct tooltip and arrow placements
type PlacementConfig = {
  style: CSSProperties & { translateX?: string; translateY?: string };
  arrowPlacement: Placement;
};

const getPlacementConfig = (
  placement: Placement,
  offset: number
): PlacementConfig => {
  switch (placement) {
    case "top":
      return {
        style: {
          bottom: `calc(100% + ${offset}px)`,
          left: "50%",
          translateX: "-50%",
          transformOrigin: "bottom",
        },
        arrowPlacement: "bottom",
      };

    case "right":
      return {
        style: {
          left: `calc(100% + ${offset}px)`,
          top: "50%",
          translateY: "-50%",
          transformOrigin: "left",
        },
        arrowPlacement: "left",
      };

    case "bottom":
      return {
        style: {
          top: `calc(100% + ${offset}px)`,
          left: "50%",
          translateX: "-50%",
          transformOrigin: "top",
        },
        arrowPlacement: "top",
      };
    case "left":
      return {
        style: {
          right: `calc(100% + ${offset}px)`,
          top: "50%",
          translateY: "-50%",
          transformOrigin: "right",
        },
        arrowPlacement: "right",
      };
    case "top-start":
      return {
        style: {
          bottom: `calc(100% + ${offset}px)`,
          left: "0",
          transformOrigin: "bottom left",
        },
        arrowPlacement: "bottom-start",
      };
    case "top-end":
      return {
        style: {
          bottom: `calc(100% + ${offset}px)`,
          right: "0",
          transformOrigin: "bottom right",
        },
        arrowPlacement: "bottom-end",
      };
    case "right-start":
      return {
        style: {
          left: `calc(100% + ${offset}px)`,
          top: "0",
          transformOrigin: "top left",
        },
        arrowPlacement: "left-start",
      };
    case "right-end":
      return {
        style: {
          left: `calc(100% + ${offset}px)`,
          bottom: "0",
          transformOrigin: "bottom left",
        },
        arrowPlacement: "left-end",
      };
    case "bottom-start":
      return {
        style: {
          top: `calc(100% + ${offset}px)`,
          left: "0",
          transformOrigin: "top left",
        },
        arrowPlacement: "top-start",
      };
    case "bottom-end":
      return {
        style: {
          top: `calc(100% + ${offset}px)`,
          right: "0",
          transformOrigin: "top right",
        },
        arrowPlacement: "top-end",
      };
    case "left-start":
      return {
        style: {
          right: `calc(100% + ${offset}px)`,
          top: "0",
          transformOrigin: "top right",
        },
        arrowPlacement: "right-start",
      };
    case "left-end":
      return {
        style: {
          right: `calc(100% + ${offset}px)`,
          bottom: "0",
          transformOrigin: "bottom right",
        },
        arrowPlacement: "right-end",
      };
  }
};
