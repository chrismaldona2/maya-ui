"use client";
import { motion, Variants, AnimatePresence } from "motion/react";
import useTheme from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "./icons";
import { HTMLAttributes, MouseEvent } from "react";

export const animations: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
    rotate: 90,
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 450,
      damping: 22,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    rotate: -90,
    transition: {
      duration: 0.2,
    },
  },
};

const shadow = {
  dark: "drop-shadow-[0px_0px_1.35rem_rgba(143,_159,_201,_1)]",
  light: "drop-shadow-[0px_0px_.8rem_rgba(255,_200,_0,_1)]",
};

interface ThemeToggle extends HTMLAttributes<HTMLButtonElement> {
  iconsClassName?: string;
}

const RotatingThemeToggle = ({
  className,
  onClick,
  iconsClassName,
  ...props
}: ThemeToggle) => {
  const { mounted, resolvedTheme, handleSwitch } = useTheme();
  if (!mounted) return;
  // ↑ the theme managment is up to you

  const ariaLabel =
    props["aria-label"] ??
    (resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    handleSwitch();
    onClick?.(event);
  };

  const iconClassName = cn("size-full rounded-sm", iconsClassName);

  return (
    <button
      {...props}
      className={cn(
        "size-7 appearance-none cursor-pointer",
        resolvedTheme === "dark" ? shadow.dark : shadow.light,
        className
      )}
      onClick={handleClick}
      aria-label={ariaLabel}
      title={ariaLabel}
      role={props.role ?? "switch"}
      aria-checked={resolvedTheme === "light"}
    >
      <AnimatePresence mode="wait">
        {resolvedTheme === "dark" ? (
          <motion.div
            key="moon"
            variants={animations}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <MoonIcon className={iconClassName} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            variants={animations}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <SunIcon className={iconClassName} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default RotatingThemeToggle;
