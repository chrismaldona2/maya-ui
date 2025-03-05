"use client";
import Button from "@/components/button";
import { cn } from "@/lib/utils";
import { CSSProperties, ReactNode } from "react";
import { LazyMotion, domAnimation, m, Variants } from "motion/react";
import { cva } from "class-variance-authority";
import { useDelayedToggle } from "@/hooks/use-delayed-toggle";

const animation: Variants = {
  hidden: {
    visibility: "hidden",
    opacity: 0,
    scale: 0.8,
    transition: { type: "spring", duration: 0.5 },
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

interface PlacementConfig {
  [key: string]: {
    style: CSSProperties & { translateX?: string; translateY?: string };
    arrowPlacement: TooltipArrowProps["placement"];
  };
}

const placementConfig: PlacementConfig = {
  top: {
    style: {
      bottom: "calc(100% + 12px)",
      left: "50%",
      translateX: "-50%",
      transformOrigin: "bottom",
    },
    arrowPlacement: "bottom",
  },
  right: {
    style: {
      left: "calc(100% + 12px)",
      top: "50%",
      translateY: "-50%",
      transformOrigin: "left",
    },
    arrowPlacement: "left",
  },
  bottom: {
    style: {
      top: "calc(100% + 12px)",
      left: "50%",
      translateX: "-50%",
      transformOrigin: "top",
    },
    arrowPlacement: "top",
  },
  left: {
    style: {
      right: "calc(100% + 12px)",
      top: "50%",
      translateY: "-50%",
      transformOrigin: "right",
    },
    arrowPlacement: "right",
  },

  "top-start": {
    style: {
      bottom: "calc(100% + 12px)",
      left: "0",
      transformOrigin: "bottom left",
    },
    arrowPlacement: "bottom-start",
  },
  "top-end": {
    style: {
      bottom: "calc(100% + 12px)",
      right: "0",
      transformOrigin: "bottom right",
    },
    arrowPlacement: "bottom-end",
  },

  "right-start": {
    style: {
      left: "calc(100% + 12px)",
      top: "0",
      transformOrigin: "top left",
    },
    arrowPlacement: "left-start",
  },
  "right-end": {
    style: {
      left: "calc(100% + 12px)",
      bottom: "0",
      transformOrigin: "bottom left",
    },
    arrowPlacement: "left-end",
  },

  "bottom-start": {
    style: { top: "calc(100% + 12px)", left: "0", transformOrigin: "top left" },
    arrowPlacement: "top-start",
  },
  "bottom-end": {
    style: {
      top: "calc(100% + 12px)",
      right: "0",
      transformOrigin: "top right",
    },
    arrowPlacement: "top-end",
  },

  "left-start": {
    style: {
      right: "calc(100% + 12px)",
      top: "0",
      transformOrigin: "top right",
    },
    arrowPlacement: "right-start",
  },
  "left-end": {
    style: {
      right: "calc(100% + 12px)",
      bottom: "0",
      transformOrigin: "bottom right",
    },
    arrowPlacement: "right-end",
  },
};

const tooltipVariants = cva(
  "absolute cursor-default select-none min-w-full w-max",
  {
    variants: {
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
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
  closeDelay?: number;
  showArrow?: boolean;
  arrowClassName?: string;
}

const Tooltip = ({
  children,
  content,
  className,
  placement = "bottom",
  radius,
  openDelay = 200,
  closeDelay = 750,
  showArrow,
  arrowClassName,
}: TooltipProps) => {
  const { isVisible, show, hide, toggle } = useDelayedToggle(
    openDelay,
    closeDelay
  );

  return (
    <div
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onTouchStart={toggle}
    >
      {children}

      <LazyMotion features={domAnimation}>
        <m.div
          variants={animation}
          initial="hidden"
          animate={isVisible ? "visible" : ""}
          className={cn(
            tooltipVariants({ radius }),
            "bg-violet-700 py-2 px-3.5 text-neutral-50 z-30",
            className
          )}
          style={placementConfig[placement].style}
          role="tooltip"
        >
          {showArrow && (
            <TooltipArrow
              placement={placementConfig[placement].arrowPlacement}
              className={arrowClassName}
            />
          )}
          {content}
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default Tooltip;

interface TooltipArrowProps {
  placement?: Placement;
  className?: string;
}

const tooltipArrowVariants = cva(
  "absolute size-2 rounded-[0%_100%_100%_0%_/_100%_0%_100%_0%]",
  {
    variants: {
      placement: {
        top: "bottom-full left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45",
        right:
          "left-full top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-[135deg]",
        bottom:
          "top-full left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[225deg]",
        left: "right-full top-1/2 -translate-y-1/2 translate-x-1/2 -rotate-45",

        "top-start": "bottom-full left-4 translate-y-1/2 rotate-45",
        "top-end":
          "bottom-full right-4 -translate-x-1/2 translate-y-1/2 rotate-45",

        "right-start": "left-full top-4 -translate-x-1/2 rotate-[135deg]",
        "right-end":
          "left-full bottom-4 -translate-y-1/2 -translate-x-1/2 rotate-[135deg]",

        "bottom-start": "top-full left-4 -translate-y-1/2 rotate-[225deg]",
        "bottom-end": "top-full right-4 -translate-y-1/2 rotate-[225deg]",

        "left-start": "right-full top-4 translate-x-1/2 -rotate-45",
        "left-end": "right-full bottom-4 translate-x-1/2 -rotate-45",
      },
    },
  }
);

const TooltipArrow = ({ placement, className }: TooltipArrowProps) => {
  return (
    <div
      className={cn(
        tooltipArrowVariants({ placement }),
        "bg-inherit",
        className
      )}
    />
  );
};

export const TooltipDemo = () => {
  return (
    <Tooltip
      content="I'm a tooltip! 😎"
      placement="top"
      className="max-w-[300px]"
      showArrow
    >
      <Button>Hover me</Button>
    </Tooltip>
  );
};
