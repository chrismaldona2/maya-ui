"use client";
import { useRef, useState } from "react";
import { motion, useAnimate } from "motion/react";
import { useEscapeKeyPress } from "@/hooks/useEscapeKeyPress";

interface AnimatedSearchBoxProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  clearOnSubmit?: boolean;
}

const AnimatedSearchBox = ({
  onSearch,
  placeholder,
  clearOnSubmit,
}: AnimatedSearchBoxProps) => {
  const [isSearching, setIsSearching] = useState(false);
  const [scope, animate] = useAnimate();
  const inputRef = useRef<HTMLInputElement>(null);

  const openSearchBox = async () => {
    setIsSearching(true);
    await animate(
      [
        [
          scope.current.querySelector("#search-input"),
          { width: "100%", visibility: "visible", x: [25, 0] },
          { at: 0 },
        ],
        [
          scope.current.querySelector("#search-button"),
          {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
          { at: 0 },
        ],
      ],
      { duration: 0.5, ease: "easeInOut" }
    );
    inputRef.current?.focus();
  };

  const closeSearchBox = async () => {
    setIsSearching(false);
    await animate(
      [
        [
          scope.current.querySelector("#search-input"),
          { width: 0, visibility: "hidden" },
          { at: 0 },
        ],
        [
          scope.current.querySelector("#search-button"),
          {
            borderTopLeftRadius: "0.5rem",
            borderBottomLeftRadius: "0.5rem",
          },
          { at: 0 },
        ],
      ],
      { duration: 0.5, ease: "easeInOut" }
    );

    clearInput();
  };
  useEscapeKeyPress(closeSearchBox, inputRef);

  const handleSearch = () => {
    if (inputRef.current) {
      onSearch?.(inputRef.current.value);
      if (clearOnSubmit) clearInput();
    }
  };
  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <motion.div
      className="relative flex justify-center shadow-sm"
      ref={scope}
      layout
    >
      <div
        id="search-input"
        className="overflow-hidden"
        style={{ width: 0, visibility: "hidden" }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          className="min-h-full w-full outline-none py-2 px-4 rounded-l-lg bg-[#ffffff] dark:bg-[#2a2a2a]"
          aria-hidden={!isSearching}
        />
      </div>

      <motion.button
        layout
        id="search-button"
        className="relative py-3 px-5 text-base/none sm:text-lg/none bg-blue-600 hover:bg-blue-500 transition-colors duration-[.35s] font-medium text-center overflow-clip whitespace-nowrap text-slate-50 "
        style={{ borderRadius: "0.5rem" }}
        onClick={isSearching ? handleSearch : openSearchBox}
      >
        {isSearching ? "Search" : "Start"}
      </motion.button>
    </motion.div>
  );
};

export default AnimatedSearchBox;
