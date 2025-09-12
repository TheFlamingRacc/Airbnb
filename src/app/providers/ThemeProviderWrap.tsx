"use client";

import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "../theme/theme";

type ThemeMode = "light" | "dark" | "system";

type ThemeContextType = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export default function ThemeProviderWrap({ children }: PropsWithChildren) {
  const [mode, setModeState] = useState<ThemeMode>("system");
  const [resolvedMode, setResolvedMode] = useState<"light" | "dark">("light");

  // при першому завантаженні читаємо з localStorage
  useEffect(() => {
    const stored = localStorage.getItem("themeMode") as ThemeMode | null;
    if (stored) {
      setModeState(stored);
    }
  }, []);

  // кожного разу, коли змінюється mode – записуємо у localStorage
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
    if (mode === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setResolvedMode(prefersDark ? "dark" : "light");
    } else {
      setResolvedMode(mode);
    }
  }, [mode]);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={resolvedMode === "dark" ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
