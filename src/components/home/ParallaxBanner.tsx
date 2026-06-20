"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxBanner() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Image moves slower than scroll — classic parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="relative w-full h-screen overflow-hidden">
      {/* Parallax image layer */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: imageY }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&auto=format&fit=crop"
          alt="CoVian Advisory"
          className="w-full h-[130%] object-cover object-center"
          style={{ marginTop: "-15%" }}
        />
      </motion.div>
    </div>
  );
}
