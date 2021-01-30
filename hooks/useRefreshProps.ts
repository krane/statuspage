import { useRouter } from "next/router";
import { useEffect } from "react";

// Refreshes server side props on an interval
export function useRefreshProps(intervalMs: number) {
  const router = useRouter();
  const refreshData = () => router.replace(router.asPath);
  useEffect(() => {
    const interval = setInterval(refreshData, intervalMs);
    return () => clearInterval(interval);
  }, []);
}
