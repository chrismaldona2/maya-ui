"use client";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";
const SmoothScroll = ({
  children,
  root,
}: {
  children: ReactNode;
  root?: boolean;
}) => {
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
      options={{ autoRaf: true, duration: 1.1 }}
      ref={lenisRef}
      root={root}
    >
      {children}
    </ReactLenis>
  );
};
export default SmoothScroll;
