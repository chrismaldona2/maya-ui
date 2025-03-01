"use client";
import { MoonIcon, SunIcon } from "@/components/icons";
import useTheme from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { HTMLAttributes, MouseEvent, useState } from "react";

const ThemeToggle = ({
  className,
  onClick,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => {
  const { mounted, resolvedTheme, oppositeTheme, handleSwitch } = useTheme();
  const [isExiting, setIsExiting] = useState(false);
  if (!mounted) return null;

  const ariaLabel = props["aria-label"] ?? `Switch to ${oppositeTheme} mode`;

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
        "size-6 appearance-none cursor-pointer rounded-sm overflow-clip p-1",
        isExiting ? "animate-rotate-out" : "animate-rotate-in",
        className
      )}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
      aria-label={ariaLabel}
      title={ariaLabel}
      role={props.role ?? "switch"}
      aria-checked={resolvedTheme === "light"}
    >
      {resolvedTheme === "dark" ? (
        <MoonIcon className="text-neutral-300 size-full" />
      ) : (
        <SunIcon className="text-neutral-500 size-full" />
      )}
    </button>
  );
};

export default ThemeToggle;
