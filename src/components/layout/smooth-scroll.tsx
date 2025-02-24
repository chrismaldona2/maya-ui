"use client";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";
import { LenisOptions } from "lenis";

const SCROLL_GLOBAL_CONFIG: LenisOptions = {
  lerp: 0.09,
  autoRaf: false,
};

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }
    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis options={SCROLL_GLOBAL_CONFIG} ref={lenisRef} root>
      {children}
    </ReactLenis>
  );
};

const NestedSmoothScroll = ({
  children,
  maxHeight,
}: {
  children: ReactNode;
  maxHeight: string;
}) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }
    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      options={SCROLL_GLOBAL_CONFIG}
      ref={lenisRef}
      className={`overflow-auto w-full `}
      style={{ maxHeight }}
    >
      {children}
    </ReactLenis>
  );
};

export { SmoothScroll, NestedSmoothScroll };
