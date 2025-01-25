"use client";

import Lenis from "lenis";
import { useEffect, useRef, ReactNode } from "react";

interface SmoothScrollWrapperProps {
  children: ReactNode;
}

export default function SmoothScrollWrapper({ children }: SmoothScrollWrapperProps) {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 1.2, // Control the duration of the scroll
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 2,
    });

    const animate = (time: number) => {
      lenis.current?.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current?.destroy();
      lenis.current = null;
    };
  }, []);

  return <div>{children}</div>;
}
