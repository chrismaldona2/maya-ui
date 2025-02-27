"use client";
import { useState, useCallback, useRef } from "react";

export const useCopy = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const copy = useCallback(async (text: string) => {
    setIsCopied(false);
    setError(null);

    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API not available");
      }

      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setIsCopied(false);
      }, 2500);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to copy text"));
    }
  }, []);

  return { copy, isCopied, error };
};
