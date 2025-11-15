"use client";

import { Switch } from "@mui/material";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <Switch onChange={handleChange} checked={theme === "dark"} />;
}
