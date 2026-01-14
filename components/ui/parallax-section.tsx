"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  offset?: number;
}

export function ParallaxSection({ children, className = "", id, offset = 50 }: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.95, 1, 1, 0.95]);

  return (
    <section id={id} ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, opacity, scale }} className="relative z-10">
        {children}
      </motion.div>
    </section>
  );
}
