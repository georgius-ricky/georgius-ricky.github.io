"use client"; 

import { useEffect, useState } from "react";
import { IconBrightnessUpFilled, IconMoonFilled } from "@tabler/icons-react";

export default function ThemeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const isDark = savedTheme === "dark";
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-between p-1 w-12 h-6 rounded-full transition-all border-dashed border-[1px] border-gray-600 dark:border-gray-200 ${
        isDarkMode ? "bg-gray-600" : "bg-gray-200"
      }`}
    >
      <div
        className={`flex items-center justify-center w-5 h-5 rounded-full shadow-md transform transition-transform ${
          isDarkMode ? "translate-x-5 bg-gray-200" : "translate-x-0 bg-gray-800"
        }`}
      >
        {isDarkMode ? (
          <IconMoonFilled className="text-gray-800" size={18} />
        ) : (
          <IconBrightnessUpFilled className="text-gray-300" size={18} />
        )}
      </div>
    </button>
  );
}
