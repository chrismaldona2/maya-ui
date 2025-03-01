"use client";
// import { useLenis } from "lenis/react";
import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const lenis = useLenis();
  // useEffect(() => {
  //   lenis?.scrollTo(0, {
  //     duration: 0.8,
  //   });
  // }, [lenis]);

  return null;
}
