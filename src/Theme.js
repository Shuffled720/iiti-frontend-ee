import { createTheme } from "@mui/material/styles";
import cssTheme from "./cssTheme";

const newTheme = cssTheme();
const theme = createTheme({
  palette: {
    primary: {
      main: newTheme,
      mainGradient: "linear-gradient(to right, #105297, #fff)",
    },
    secondary: {
      main: "#fff",
    },
    tertiary: {
      main: "#000",
    },
    four: {
      main: "#1e1e1e",
    },
  },
});

export default theme;
