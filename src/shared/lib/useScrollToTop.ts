import { useEffect } from "react";

export const useSсrollToTop = (trigger: string | null) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [trigger]);
};
