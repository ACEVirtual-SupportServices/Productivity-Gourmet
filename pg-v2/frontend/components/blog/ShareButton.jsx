"use client";

import { useState } from "react";
import styles from "./ShareButton.module.scss";

export default function ShareButton({ title }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const currentUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this article: ${title}`,
          url: currentUrl,
        });
        return;
      } catch (error) {
        if (error.name === "AbortError") return; 
        console.error("Error sharing:", error);
      }
    }

    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button 
      onClick={handleShare} 
      className={styles.shareButton}
      aria-label="Share this post"
    >
      {/* Simple SVG Share Icon */}
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
      {copied ? "Link Copied!" : "Share Post"}
    </button>
  );
}