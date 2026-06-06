"use client";

import { useEffect, useRef, useState } from "react";

const cx = (...parts) => parts.filter(Boolean).join(" ");

export default function AnimatedText({
  text = "Designed & developed by Hassine with AI assistance",
  stepMs = 30,
  className,
}) {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
          else { 
            setIsInView(false); 
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () =>  {
      observer.unobserve(element);
      observer.disconnect();   
    };
  }, []); 
  return (
    <p
      ref={containerRef}
      className={cx("text-sm text-zinc-600 dark:text-zinc-400", className)}
    
    >
      <span className="sr-only"></span>
      <span aria-hidden="true">
        {text.split("").map((char, index) => (
          <span
            key={`${index}`}
            className={cx(
              "inline-block",
              isInView ? "animate-fadeIn" : "opacity-0"
            )}
            style={
              isInView
                ? { animationDelay: `${index * stepMs}ms` }
                : undefined
            }
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </p>
  );
}