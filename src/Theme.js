import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#105297",
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
