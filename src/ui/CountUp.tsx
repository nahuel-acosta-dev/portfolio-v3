"use client";
import { useEffect, useRef, useState } from "react";

export default function CountUp({
  end = 0,
  start = 0,
  duration = 2000,
}: {
  end: number;
  start?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !ref.current) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - startTime) / duration);
      const val = Math.floor(start + (end - start) * p);
      if (ref.current) ref.current.textContent = String(val);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, start, end, duration]);

  return <span ref={ref}>{start}</span>;
}
