"use client";
import { useTheme } from "@/hooks/use-theme";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { cn } from "@/lib/utils";
import { HTMLAttributes, MouseEvent, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

const shadow = {
  dark: "drop-shadow-[0px_0px_1.35rem_rgba(143,_159,_201,_1)]",
  light: "drop-shadow-[0px_0px_.8rem_rgba(255,_200,_0,_1)]",
};

interface ThemeToggleProps extends HTMLAttributes<HTMLButtonElement> {
  iconsClassName?: string;
}

const ThemeToggle = ({
  className,
  onClick,
  iconsClassName,
  ...props
}: ThemeToggleProps) => {
  const { resolvedTheme, handleSwitch } = useTheme();
  // ↑ the theme managment is up to you

  const [isExiting, setIsExiting] = useState(false);

  // ↓ only required if you're using server components
  const isMounted = useIsMounted();
  if (!isMounted) return null;

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

  const ariaLabel =
    props["aria-label"] ??
    (resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");

  const iconClassName = cn("size-full", iconsClassName);

  return (
    <button
      {...props}
      className={cn(
        "size-7 appearance-none cursor-pointer rounded-sm overflow-clip ",
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
        <MoonIcon className={iconClassName} />
      ) : (
        <SunIcon className={iconClassName} />
      )}
    </button>
  );
};

export default ThemeToggle;
