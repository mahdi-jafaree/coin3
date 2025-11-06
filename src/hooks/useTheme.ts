"use client";

import { useEffect, useState } from "react";

export const useTheme = () => {
  const [currentTheme, setTheme] = useState<"dark" | "light">();

  useEffect(() => {
    const htmlTag = document.getElementsByTagName("html").item(0);
    if (htmlTag && !htmlTag?.getAttribute("data-theme")) {
      htmlTag.setAttribute("data-theme", "dark");
      setTheme("dark");
    } else if (htmlTag && !!htmlTag?.getAttribute("data-theme")) {
      setTheme(
        htmlTag?.getAttribute("data-theme") === "dark" ? "dark" : "light",
      );
    }
  }, []);

  const toggleTheme = () => {
    const htmlTag = document.getElementsByTagName("html").item(0);
    if (htmlTag) {
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      htmlTag.setAttribute("data-theme", newTheme);
      setTheme(newTheme);
    }
  };

  return { toggleTheme, currentTheme };
};
