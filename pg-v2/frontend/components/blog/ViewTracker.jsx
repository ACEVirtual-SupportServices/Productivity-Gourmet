"use client";

import { useEffect, useRef } from "react";

export default function ViewTracker({ slug }) {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;

    async function trackView() {
      try {
        const pageReferrer = document.referrer || "Direct";

        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
        await fetch(`${baseUrl}/api/posts/${slug}/view`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", 
          body: JSON.stringify({ referrer: pageReferrer }),
        });
      } catch (err) {
        console.error("Analytics tracking failed:", err);
      }
    }

    trackView();
  }, [slug]);
  return null; 
}