// detects clicks outside a specified element
"use client";
import { RefObject, useEffect } from "react";

export const useClickOutside = (
  onClickOutside?: () => void,
  ref?: RefObject<HTMLElement | null>
) => {
  useEffect(() => {
    if (!onClickOutside || !ref) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref, onClickOutside]);
};
