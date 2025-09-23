"use client";

import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 750,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#ff9800",
    },
    text: {
      primary: "#000000ff",
      secondary: "#383838ff",
    },
    custom: {
      main: "#fff",
      second: "#ddddddff",
    },
  },
  typography: {
    fontFamily: "Manrope",
  },
});

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 750,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#ff9800",
    },
    text: {
      primary: "#fff",
      secondary: "#c1c1c1ff",
    },
    custom: {
      main: "#121212ff",
      second: "#202020ff",
    },
  },
  typography: {
    fontFamily: "Manrope",
  },
  
});
