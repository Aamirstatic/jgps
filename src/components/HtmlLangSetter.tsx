"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Sets the <html lang= - > attribute dynamically based on the current route.
 * /hi/* routes get lang="hi", all other routes get lang="en".
 */
export default function HtmlLangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    const lang = pathname.startsWith("/hi") ? "hi" : "en";
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}
