"use client";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";
import { LenisOptions } from "lenis";

const GLOBAL_SCROLL_CONFIG: LenisOptions = {
  lerp: 0.09,
  autoRaf: false,
};

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }
    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis options={GLOBAL_SCROLL_CONFIG} ref={lenisRef} root>
      {children}
    </ReactLenis>
  );
};

export { SmoothScroll };
