import { useEffect } from "react";
import { analytics } from "@/config/analytics";
import { initializeAnalytics, listenForLeadIntent } from "@/lib/analytics";

/** One invisible integration for every page in a contractor site. */
export function Analytics() {
  useEffect(() => {
    if (!analytics.enabled) return;
    initializeAnalytics(analytics);
    return listenForLeadIntent(analytics);
  }, []);
  return null;
}
