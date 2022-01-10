import { createTheme } from "@mui/material/styles";
export const myTheme = createTheme({
  palette: {
    yellow: {
      // light: will be calculated from palette.primary.main,
      main: "#ffc107",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: "#fff",
    },
    red: {
      main: "#f50057",
    },
    green: {
      main: "#00c853",
    },
  },
  //   typography: {
  //     color: "#fff",
  //   },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
        },
      },
    },
  },
});
