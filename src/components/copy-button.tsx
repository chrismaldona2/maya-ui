"use client";
import { useCopy } from "@/hooks/use-copy";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  Variants,
} from "motion/react";
import { CopyIcon, CheckIcon, CrossIcon } from "./icons";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, memo, MouseEvent } from "react";

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

  const MotionCheckIcon = m.create(CheckIcon);
  const MotionCrossIcon = m.create(CrossIcon);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    copy(text);
    props.onClick?.(e);
  };

  return (
    <button
      {...props}
      aria-label={props["aria-label"] ?? "Copy to clipboard"}
      title={props.title ?? "Copy to clipboard"}
      className={cn(
        "p-2.5 cursor-pointer rounded-lg bg-neutral-200/90 hover:bg-neutral-100/90 dark:bg-neutral-900/90 dark:hover:bg-neutral-850/90 active:scale-[85%] transition-transform hover:transition",
        className
      )}
      onClick={handleClick}
    >
      <div className="relative">
        <CopyIcon className="size-full text-neutral-400  dark:text-neutral-700" />
        <AnimatePresence mode="wait">
          <LazyMotion features={domAnimation}>
            {isCopied && (
              <MotionCheckIcon
                variants={successAnimation}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.2 }}
                className="size-[42%] absolute right-[17%] bottom-[20%] text-green-500"
              />
            )}

            {error && (
              <MotionCrossIcon
                variants={successAnimation}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.2 }}
                className="size-[42%] absolute right-[17%] bottom-[20%] text-red-700"
              />
            )}
          </LazyMotion>
        </AnimatePresence>
      </div>
    </button>
  );
};

export default memo(CopyButton);
