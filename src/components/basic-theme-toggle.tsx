import { MoonIcon, SunIcon } from "@/components/icons";
import useTheme from "@/hooks/use-theme";

const ThemeToggle = () => {
  const { mounted, resolvedTheme, oppositeTheme, handleSwitch } = useTheme();

  if (!mounted) return null;

  return (
    <button
      onClick={handleSwitch}
      className="p-1 size-6"
      aria-label={`Switch to ${oppositeTheme} mode`}
      title={`Switch to ${oppositeTheme} mode`}
    >
      {resolvedTheme === "dark" ? (
        <MoonIcon className="text-neutral-300 size-full" />
      ) : (
        <SunIcon className="text-neutral-700 size-full" />
      )}
    </button>
  );
};

export default ThemeToggle;
