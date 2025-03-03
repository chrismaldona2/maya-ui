import { HookSnippet } from "@/types/shared";

export const useIsMountedHook: HookSnippet = {
  id: 1,
  name: "use-is-mounted",
  code: `
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
`,
};
