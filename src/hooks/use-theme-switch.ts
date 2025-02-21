import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  const oppositeTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSwitch = () => {
    setTheme(oppositeTheme);
  };

  return { mounted, theme, resolvedTheme, oppositeTheme, handleSwitch };
};

export default useThemeSwitch;
