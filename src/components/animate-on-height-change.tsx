"use client";
import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { LazyMotion, m, domAnimation } from "motion/react";

const AnimateOnHeightChange = ({ children }: { children: ReactNode }) => {
  const [height, setHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const motionDivRef = useRef<HTMLDivElement | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const animationCountRef = useRef(0);

  console.log(height);
  const measureHeight = () => {
    return contentRef.current ? contentRef.current.offsetHeight : 0;
  };

  const setOverflow = (value: "hidden" | "visible") => {
    if (motionDivRef.current) {
      motionDivRef.current.style.overflow = value;
    }
  };

  useLayoutEffect(() => {
    const initialHeight = measureHeight();
    setHeight(initialHeight);

    resizeObserverRef.current = new ResizeObserver((entries) => {
      const newHeight = entries[0].target.clientHeight;
      if (newHeight !== height) {
        setOverflow("hidden");
        setHeight(newHeight);
      }
    });

    if (contentRef.current) {
      resizeObserverRef.current.observe(contentRef.current);
    }
    return () => {
      resizeObserverRef.current?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnimationStart = () => {
    animationCountRef.current += 1;
  };

  const handleAnimationComplete = () => {
    animationCountRef.current -= 1;
    if (animationCountRef.current === 1) {
      setOverflow("visible");
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={motionDivRef}
        initial={{ height: "auto" }}
        animate={{ height }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        <div ref={contentRef}>{children}</div>
      </m.div>
    </LazyMotion>
  );
};

export default AnimateOnHeightChange;
