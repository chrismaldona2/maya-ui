"use client";
import { motion } from "motion/react";
import React, { ReactNode, useLayoutEffect, useRef, useState } from "react";

const AnimateOnHeightChange = ({ children }: { children: ReactNode }) => {
  const [height, setHeight] = useState<number | "auto">("auto");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const measureHeight = () => {
    if (containerRef.current) {
      return containerRef.current.offsetHeight;
    }
    return 0;
  };

  useLayoutEffect(() => {
    // sync measurement before paint
    const initialHeight = measureHeight();
    setHeight(initialHeight);

    resizeObserverRef.current = new ResizeObserver((entries) => {
      const newHeight = entries[0].target.clientHeight;
      setHeight(newHeight);
    });

    if (containerRef.current) {
      resizeObserverRef.current.observe(containerRef.current);
    }

    return () => {
      resizeObserverRef.current?.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial={{ height: "auto" }}
      style={{ height }}
      animate={{ height }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div ref={containerRef}>{children}</div>
    </motion.div>
  );
};

export default AnimateOnHeightChange;
