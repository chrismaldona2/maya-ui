import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div
      className={cn(
        "rounded-full size-8 border-4 border-neutral-400 dark:border-neutral-400 animate-spin border-l-transparent dark:border-l-transparent",
        className
      )}
    />
  );
};

export default Loader;
