"use client";

import { ThemeContext } from "../providers/ThemeProviderWrap";
import { Switch } from "@mui/material";
import { useContext } from "react";

export default function ThemeSwitch() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("ThemeSwitch must be used within ThemeProviderWrapper");

  const { mode, setMode } = context;

  const handleChange = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <Switch
      onChange={handleChange}
      checked={mode === "dark"} // ← синхронізуємо зі станом теми
    />
  );
}
