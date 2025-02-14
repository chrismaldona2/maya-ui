import useThemeSwitch from "@/hooks/useThemeSwitch";
import { MoonIcon, SunIcon } from "@/components/ui/icons";

const ThemeToggle = () => {
  const { mounted, theme, oppositeTheme, handleSwitch } = useThemeSwitch();

  if (!mounted) return null;

  return (
    <button
      onClick={handleSwitch}
      className="p-1 size-6"
      aria-label={`Switch to ${oppositeTheme} mode`}
      title={`Switch to ${oppositeTheme} mode`}
    >
      {theme === "dark" ? (
        <MoonIcon className="[&_path]:fill-neutral-300 size-full" />
      ) : (
        <SunIcon className="[&_path]:fill-neutral-700 size-full" />
      )}
    </button>
  );
};

export default ThemeToggle;
