"use client";
import { useCopy } from "@/hooks/use-copy";
import { AnimatePresence, motion, Variants } from "motion/react";
import { CopyIcon, CheckIcon, CrossIcon } from "./icons";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const successAnimation: Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
};

const CopyButton = ({ text, className, ...props }: CopyButtonProps) => {
  const { copy, isCopied, error } = useCopy();

  const MotionCheckIcon = motion.create(CheckIcon);
  const MotionCrossIcon = motion.create(CrossIcon);

  return (
    <button
      onClick={() => copy(text)}
      aria-label="Copy to clipboard"
      title="Copy to clipboard"
      className={cn(
        "p-2.5 cursor-pointer rounded-lg bg-neutral-200/90 hover:bg-neutral-100/90 dark:bg-neutral-900/90 dark:hover:bg-neutral-850/90 active:scale-[85%] transition-[transform] duration-300 hover:[transition-property:transform,background-color]",
        className
      )}
      {...props}
    >
      <div className="relative">
        <CopyIcon className="size-full [&_path]:fill-neutral-400  dark:[&_path]:fill-neutral-700" />
        <AnimatePresence mode="wait">
          {isCopied && (
            <MotionCheckIcon
              variants={successAnimation}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2 }}
              className="size-[42%] absolute right-[17%] bottom-[20%] [&_path]:fill-green-500"
            />
          )}

          {error && (
            <MotionCrossIcon
              variants={successAnimation}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2 }}
              className="size-[42%] absolute right-[17%] bottom-[20%] [&_path]:fill-red-700"
            />
          )}
        </AnimatePresence>
      </div>
    </button>
  );
};

export default CopyButton;
