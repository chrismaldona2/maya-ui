// checks if the component is currently mounted
// helps to prevent hydration mismatches
"use client";
import { useEffect, useState } from "react";

export const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  return isMounted;
};
