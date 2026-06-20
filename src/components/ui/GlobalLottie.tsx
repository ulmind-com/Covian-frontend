"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";

import verifiedAnimation from "../../../public/Lottie/Verified Icon Animation.json";
import wrongAnimation from "../../../public/Lottie/Wrong.json";

export type LottieType = "success" | "error" | null;

export const triggerLottie = (type: "success" | "error") => {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("show-global-lottie", { detail: type });
    window.dispatchEvent(event);
  }
};

export function GlobalLottie() {
  const [activeLottie, setActiveLottie] = useState<LottieType>(null);

  useEffect(() => {
    const handleEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      setActiveLottie(customEvent.detail);
      
      // Auto-hide after animation completes
      setTimeout(() => {
        setActiveLottie(null);
      }, 2500); // 2.5 seconds is usually enough for these short lotties
    };

    window.addEventListener("show-global-lottie", handleEvent);
    return () => window.removeEventListener("show-global-lottie", handleEvent);
  }, []);

  return (
    <AnimatePresence>
      {activeLottie && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center">
            <div className="w-40 h-40">
              <Lottie 
                animationData={activeLottie === "success" ? verifiedAnimation : wrongAnimation} 
                loop={false} 
              />
            </div>
            <p className="mt-4 text-lg font-bold text-slate-800">
              {activeLottie === "success" ? "Saved Successfully!" : "Deleted Successfully!"}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
