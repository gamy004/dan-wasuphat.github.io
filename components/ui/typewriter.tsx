"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function Typewriter({ children, className = "", delay = 0, duration = 2 }: TypewriterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => children.slice(0, latest));
  const [showCursor, setShowCursor] = useState(delay === 0);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setShowCursor(true);
    }, delay * 1000);

    const controls = animate(count, children.length, {
      type: "tween",
      duration: duration,
      delay: delay,
      ease: "linear",
      onComplete: () => {
        setShowCursor(false);
      }
    });

    return () => {
      clearTimeout(startTimeout);
      controls.stop();
    };
  }, [count, children.length, delay, duration]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <motion.span>{displayText}</motion.span>
      {showCursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="ml-1 inline-block h-[1em] w-[2px] bg-primary align-middle"
        />
      )}
    </span>
  );
}
