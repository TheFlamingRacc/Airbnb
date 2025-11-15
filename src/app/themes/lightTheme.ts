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
      secondary: "#535353ff",
    },
    background: {
      default: "#fff",
      paper: "#ddddddff",
    },
  },
  typography: {
    fontFamily: "Manrope",
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          padding: 0,
        },
      },
    },
  },
});
