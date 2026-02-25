import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./Icons";

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setIsDark(current === "dark");
  }, []);

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer"
      title="Toggle theme"
    >
      {isDark ? (
        <MoonIcon className="h-8 w-8 fill-current" />
      ) : (
        <SunIcon className="h-8 w-8 fill-current" />
      )}
    </button>
  );
}
