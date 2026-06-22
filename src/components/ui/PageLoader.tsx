"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

import loadingAnimation from "../../../public/Lottie/Loading Screen.json";

export function PageLoader() {
  const [mounted, setMounted] = useState(false);

  // Hydration guard — must set state after mount to avoid SSR mismatch
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full">
      <div className="w-64 h-64 opacity-80 mix-blend-multiply">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
}

