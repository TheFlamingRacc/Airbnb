"use client";

import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "../themes/lightTheme";
import { darkTheme } from "../themes/darkTheme";

type ThemeMode = "light" | "dark" | "system";

type ThemeContextType = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export default function ThemeProviderWrap({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  if (!theme) return null;
  const muiTheme = theme === "dark" ? darkTheme : lightTheme;

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
}
