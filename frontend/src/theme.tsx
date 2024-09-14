import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#cdc2fe", // "rgb(92, 156, 214)",
    },
    secondary: {
      main: "#0b1b3d",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Outfit",
  },
});

export default theme;
