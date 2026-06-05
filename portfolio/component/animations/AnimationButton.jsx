"use client";

import { useEffect, useRef, useState } from "react";

import Button from "../ui/Button";

const cx = (...parts) => parts.filter(Boolean).join(" ");

export default function AnimationButton({
    children,
    text,
    className,
    threshold = 0.2,
    ...
    buttonProps
}) {
    const wrapperRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = wrapperRef.current;
        if (!element) return;

        const reduceMotion =
            typeof window !== "undefined" &&
            window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

        if (reduceMotion) {
            setIsInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <span
            ref={wrapperRef}
            className={cx(
                "inline-flex",
                isInView ? "animate-fadeInlong" : "opacity-0",
                className
            )}
        >
            <Button {...buttonProps}>{children ?? text}</Button>
        </span>
    );
}
