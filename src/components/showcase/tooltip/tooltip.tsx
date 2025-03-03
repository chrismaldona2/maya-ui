"use client";
import Button from "@/components/button";
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { motion, Variants } from "motion/react";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  className?: string;
}

const animation: Variants = {
  hidden: {
    visibility: "hidden",
    opacity: 0,
    y: -5,
    scale: 0.95,
  },
  visible: {
    visibility: "visible",
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Tooltip = ({ children, content, className }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div
      className="relative"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      <motion.div
        variants={animation}
        initial="hidden"
        animate={isVisible ? "visible" : ""}
        className={cn(
          "absolute top-[calc(100%+0.7rem)] left-1/2 cursor-default select-none w-full flex items-center justify-center",
          "bg-purple-800 py-2 px-3.5 rounded-md text-neutral-50",
          "after:content-[''] after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2",
          "after:border-l-[8px] after:border-l-transparent after:border-b-[8px] after:border-b-purple-800 after:border-r-[8px] after:border-r-transparent",
          className
        )}
        style={{ translateX: "-50%" }}
      >
        {content}
      </motion.div>
    </div>
  );
};

export default Tooltip;

export const TooltipDemo = () => {
  return (
    <Tooltip content="Hello 😎! ">
      <Button>Hover me</Button>
    </Tooltip>
  );
};
