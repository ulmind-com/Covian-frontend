"use client";

import { useEffect, useState } from "react";
import { PageLoader } from "@/components/ui/PageLoader";

export default function AdminTemplate({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the loader for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-[600px] flex items-center justify-center">
        <PageLoader />
      </div>
    );
  }

  return <>{children}</>;
}
