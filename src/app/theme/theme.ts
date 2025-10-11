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
    background: {
      default: '#fff',
      paper: '#ddddddff'
    }
  },
  typography: {
    fontFamily: "Manrope",
  },
  components: {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: '50px',
        padding: 0
      },
      
    },
  },
}
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
    background: {
      default: "#121212ff",
      paper: "#202020ff"
    }
  },
  typography: {
    fontFamily: "Manrope",
  },
  components: {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: '50px',
        padding: 0
      },
      
    },
  },
}
  
});
