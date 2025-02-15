"use client";
import { AnimatePresence, motion, Variants } from "motion/react";
import useThemeSwitch from "@/hooks/useThemeSwitch";
import { cn } from "@/lib/utils";

const toggleVariants: Variants = {
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
      stiffness: 260,
      damping: 20,
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

const RotatingThemeToggle = () => {
  const { mounted, theme, handleSwitch } = useThemeSwitch();
  if (!mounted) return null;

  const dropShadow =
    theme === "dark"
      ? "drop-shadow-[0px_0px_2rem_#8f9fc9]"
      : "drop-shadow-[0px_0px_1rem_#ffc800]";

  const ariaLabel =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <div className="relative size-7">
      <AnimatePresence mode="wait">
        <motion.button
          key={theme}
          className={cn(
            "absolute appearance-none cursor-pointer focus:outline-none focus-visible:ring-2",
            dropShadow
          )}
          onClick={handleSwitch}
          variants={toggleVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          aria-label={ariaLabel}
          title={ariaLabel}
        >
          {theme === "dark" ? (
            <MoonIcon className="size-full rounded-sm" />
          ) : (
            <SunIcon className="size-full rounded-sm" />
          )}
        </motion.button>
      </AnimatePresence>
    </div>
  );
};

export default RotatingThemeToggle;

const SunIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none", className)}
    >
      <rect width="120" height="120" fill="#FFFFAD" />
      <rect x="15" y="15" width="90" height="90" fill="white" />
    </svg>
  );
};

const MoonIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none", className)}
    >
      <rect width="15" height="45" fill="#59637D" />
      <rect x="15" width="15" height="15" fill="#4C4F65" />
      <rect x="15" y="90" width="15" height="15" fill="#4C4F65" />
      <rect x="90" y="90" width="15" height="15" fill="#4C4F65" />
      <rect x="60" y="105" width="15" height="15" fill="#4C4F65" />
      <rect x="15" y="15" width="15" height="15" fill="#59667A" />
      <rect x="15" y="60" width="15" height="15" fill="#59667A" />
      <rect x="15" y="30" width="15" height="15" fill="#747C9E" />
      <rect x="30" y="75" width="15" height="15" fill="#EDF4FF" />
      <rect x="105" y="75" width="15" height="15" fill="#EDF4FF" />
      <rect x="105" y="60" width="15" height="15" fill="#949AAF" />
      <rect x="45" width="15" height="15" fill="#949AAF" />
      <rect x="90" y="15" width="15" height="30" fill="#949AAF" />
      <rect x="60" y="45" width="15" height="30" fill="#949AAF" />
      <rect
        width="60"
        height="15"
        transform="matrix(1 0 0 -1 45 90)"
        fill="#B8C0E2"
      />
      <rect
        width="30"
        height="15"
        transform="matrix(1 0 0 -1 75 60)"
        fill="#B8C0E2"
      />
      <rect
        width="30"
        height="15"
        transform="matrix(1 0 0 -1 30 75)"
        fill="#B8C0E2"
      />
      <rect
        width="30"
        height="15"
        transform="matrix(-4.37114e-08 1 1 4.37114e-08 45 30)"
        fill="#B8C0E2"
      />
      <rect
        width="30"
        height="15"
        transform="matrix(-4.37114e-08 1 1 4.37114e-08 75 15)"
        fill="#B8C0E2"
      />
      <rect x="60" y="30" width="15" height="15" fill="#EDF4FF" />
      <rect x="30" width="15" height="60" fill="#EDF4FF" />
      <rect x="105" width="15" height="60" fill="#EDF4FF" />
      <rect x="60" width="60" height="15" fill="#EDF4FF" />
      <rect x="45" y="15" width="30" height="15" fill="#EDF4FF" />
      <rect x="75" y="60" width="30" height="15" fill="#EDF4FF" />
      <rect x="15" y="75" width="15" height="15" fill="#747C9E" />
      <rect x="30" y="90" width="15" height="15" fill="#747C9E" />
      <rect x="105" y="90" width="15" height="15" fill="#747C9E" />
      <rect y="60" width="15" height="60" fill="#59637D" />
      <rect
        x="60"
        y="105"
        width="15"
        height="45"
        transform="rotate(90 60 105)"
        fill="#59637D"
      />
      <rect
        x="120"
        y="105"
        width="15"
        height="45"
        transform="rotate(90 120 105)"
        fill="#59637D"
      />
      <rect
        x="90"
        y="90"
        width="15"
        height="45"
        transform="rotate(90 90 90)"
        fill="#59637D"
      />
      <rect y="45" width="30" height="15" fill="#454B62" />
    </svg>
  );
};
