"use client";
import { useTheme as useThemeNext } from "next-themes";
import { useEffect, useState } from "react";

const useTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useThemeNext();

  const oppositeTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSwitch = () => {
    setTheme(oppositeTheme);
  };

  return { mounted, theme, resolvedTheme, oppositeTheme, handleSwitch };
};

export default useTheme;
