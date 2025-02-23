"use client";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

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
    <ReactLenis
      options={{
        duration: 1.1,
        autoRaf: false,
      }}
      ref={lenisRef}
      root
    >
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
      options={{
        duration: 1.1,
        autoRaf: false,
      }}
      ref={lenisRef}
      className={`overflow-auto w-full`}
      style={{ maxHeight }}
    >
      {children}
    </ReactLenis>
  );
};

export { SmoothScroll, NestedSmoothScroll };
