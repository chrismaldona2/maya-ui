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
          style={{ willChange: "transform, opacity" }}
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
      <g clipPath="url(#clip0_45_2)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 15H30V30H15V15ZM15 60H30V75H15V60Z"
          fill="#59667A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45 0H60V15H45V0ZM105 60H120V75H105V60ZM105 15H90V45H105V15ZM60 45H75V75H60V45Z"
          fill="#949AAF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M90 15L75 15V45V60H105V45H90V15ZM45 60V30H60V60V75H105V90H45V75H30V60H45Z"
          fill="#B8C0E2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 0H45V15H60V0H105H120V60H105V15H75V30V45H60V30H45V60H30V0ZM105 75V60H75V75H105ZM105 75V90H120V75H105ZM30 75H45V90H30V75Z"
          fill="#EDF4FF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 30H30V45H15V30ZM15 75H30V90H15V75ZM30 90H45V105H30V90ZM105 90H120V105H105V90Z"
          fill="#747C9E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 0H0V45H15V0ZM15 60H0V120H15H60V105H75V120H120V105H90V90H45V105H15V60Z"
          fill="#59637D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 0H15V15H30V0ZM30 90H15V105H30V90ZM90 90H105V105H90V90ZM75 105H60V120H75V105ZM0 45H30V60H0V45Z"
          fill="#454B62"
        />
      </g>
      <defs>
        <clipPath id="clip0_45_2">
          <rect width="120" height="120" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
