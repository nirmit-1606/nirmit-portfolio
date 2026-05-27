import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Theme = "dark" | "light" | "neon" | "warm";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  setTheme: () => {},
});

function applyTheme(theme: Theme) {
  document.body.classList.remove("dark", "light", "neon", "warm");
  if (theme === "neon") {
    document.body.classList.add("dark", "neon");
  } else {
    document.body.classList.add(theme);
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem("portfolio-theme") as Theme) || "dark"
  );

  useEffect(() => {
    applyTheme(theme);
  }, []);

  const setTheme = (newTheme: Theme) => {
    applyTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
