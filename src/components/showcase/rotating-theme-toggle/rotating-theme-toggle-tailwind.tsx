"use client";
import useTheme from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { HTMLAttributes, MouseEvent, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

const shadow = {
  dark: "drop-shadow-[0px_0px_1.35rem_rgba(143,_159,_201,_1)]",
  light: "drop-shadow-[0px_0px_.8rem_rgba(255,_200,_0,_1)]",
};

const RotatingThemeToggle = ({
  className,
  onClick,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => {
  const { mounted, resolvedTheme, handleSwitch } = useTheme();
  const [isExiting, setIsExiting] = useState(false);
  if (!mounted) return null;

  const ariaLabel =
    props["aria-label"] ??
    (resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!isExiting) {
      setIsExiting(true);
      onClick?.(event);
    }
  };

  const handleAnimationEnd = () => {
    if (isExiting) {
      handleSwitch();
      setIsExiting(false);
    }
  };

  return (
    <button
      {...props}
      className={cn(
        "size-7 appearance-none cursor-pointer rounded-sm overflow-clip",
        resolvedTheme === "dark" ? shadow.dark : shadow.light,
        isExiting ? "animate-rotate-out" : "animate-rotate-in",
        className
      )}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
      aria-label={ariaLabel}
      role={props.role ?? "switch"}
      aria-checked={resolvedTheme === "light"}
    >
      {resolvedTheme === "dark" ? (
        <MoonIcon className="size-full" />
      ) : (
        <SunIcon className="size-full" />
      )}
    </button>
  );
};

export default RotatingThemeToggle;
