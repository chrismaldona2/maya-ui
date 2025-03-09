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

  useEffect(() => {
    if (isOpen !== undefined && isOpen !== isVisible) {
      setIsVisible(isOpen);
    }
  }, [isOpen, isVisible]);

  const clearExistingTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const show = () => {
    if (isOpen !== undefined) return;
    clearExistingTimeout();
    timeoutRef.current = setTimeout(() => setIsVisible(true), openDelay);
  };

  const hide = () => {
    if (isOpen !== undefined) return;
    clearExistingTimeout();
    timeoutRef.current = setTimeout(() => setIsVisible(false), exitDelay);
  };

  const toggle = () => {
    if (isOpen !== undefined) return;
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    return () => clearExistingTimeout();
  }, []);

  return { isVisible, show, hide, toggle };
};
