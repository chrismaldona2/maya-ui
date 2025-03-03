"use client";
import { useTheme as useThemeNext } from "next-themes";

export const useTheme = () => {
  const { theme, resolvedTheme, setTheme } = useThemeNext();

  const oppositeTheme = theme === "light" ? "dark" : "light";

  const handleSwitch = () => {
    setTheme(oppositeTheme);
  };

  return { theme, resolvedTheme, oppositeTheme, handleSwitch };
};
