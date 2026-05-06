import { useState, useEffect } from "react";

declare global {
  interface Window {
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export const useRecaptcha = () => {
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const style = document.createElement("style");
    style.innerHTML = ".grecaptcha-badge { display: none !important; }";
    document.head.appendChild(style);

    if (!siteKey) return;

    if (window.grecaptcha) {
      setRecaptchaReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaReady(true);
    script.onerror = () => console.error("Failed to load reCAPTCHA script");

    document.head.appendChild(script);

    return () => {
      style.remove();
    };
  }, [siteKey]);

  const executeRecaptcha = async (action: string = "submit"): Promise<string | null> => {
    if (!siteKey || !recaptchaReady || !window.grecaptcha) return null;
    try {
      return await window.grecaptcha.execute(siteKey, { action });
    } catch (err) {
      console.error("reCAPTCHA execution failed:", err);
      return null;
    }
  };

  return { executeRecaptcha, recaptchaReady };
};