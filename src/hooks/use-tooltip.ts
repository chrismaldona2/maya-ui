// manage tooltip visibility and delays
"use client";
import { useState, useRef, useEffect } from "react";

export const useTooltip = (
  openDelay: number,
  exitDelay: number,
  isOpen?: boolean
) => {
  const [isVisible, setIsVisible] = useState(isOpen ?? false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearExistingTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const show = () => {
    clearExistingTimeout();
    timeoutRef.current = setTimeout(() => setIsVisible(true), openDelay);
  };

  const hide = () => {
    clearExistingTimeout();
    timeoutRef.current = setTimeout(() => setIsVisible(false), exitDelay);
  };

  const toggle = () => {
    clearExistingTimeout();
    setIsVisible((prev) => !prev);
  };

  const hideInstantly = () => {
    clearExistingTimeout();
    setIsVisible(false);
  };

  useEffect(() => {
    return () => clearExistingTimeout();
  }, []);

  return { isVisible, show, hide, toggle, hideInstantly };
};
