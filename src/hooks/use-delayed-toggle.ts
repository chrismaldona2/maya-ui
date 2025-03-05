"use client";
import { useState, useRef, useEffect } from "react";

export const useDelayedToggle = (openDelay: number, exitDelay: number) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearExistingTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const show = () => {
    clearExistingTimeout();
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, openDelay);
  };

  const hide = () => {
    clearExistingTimeout();
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, exitDelay);
  };

  const toggle = () => {
    setIsVisible((state) => !state);
  };

  useEffect(() => {
    return () => {
      clearExistingTimeout();
    };
  }, []);

  return { isVisible, show, hide, toggle };
};
