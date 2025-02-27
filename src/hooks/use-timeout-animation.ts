"use client";
import { useState, useEffect, useRef, useCallback } from "react";

export const useTimeoutAnimation = (duration: number) => {
  const [isActive, setIsActive] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const startAnimation = useCallback(() => {
    if (isActive) return; // prevents restarting the animation if already active

    setIsActive(true);
    timeoutRef.current = window.setTimeout(() => {
      setIsActive(false);
    }, duration);
  }, [isActive, duration]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { isActive, startAnimation };
};
