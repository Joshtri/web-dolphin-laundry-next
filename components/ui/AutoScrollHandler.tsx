"use client";
import { useEffect } from "react";

const AutoScrollHandler = () => {
  useEffect(() => {
    // Check if there's a hash in the URL when component mounts
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Wait a bit for the page to render completely
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    };

    // Run on mount
    handleHashScroll();

    // Also listen for hash changes
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AutoScrollHandler;
