import { createTheme } from "@mui/material/styles";
import cssTheme from "./cssTheme";

const newTheme = cssTheme();
const theme = createTheme({
  // typography: {
  //   fontFamily: cursive,
  // },
  typography: {
    body1: {
      fontFamily: 'caudex',
    }
  },
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


theme.typography.body1.p = { fontFamily: 'cursive' };
theme.typography.p = { fontFamily: 'caudex', fontSize: " 1.1rem" };
theme.typography.h1 = { fontFamily: 'Yatra One', color: "#f4a064", fontWeight: "500" };
theme.typography.h3 = { fontFamily: 'Yatra One', color: "#f4a064", fontWeight: "500" };
theme.typography.h4 = { fontFamily: 'Yatra One', color: "#f4a064", fontWeight: "500", fontSize: " 4rem" };
theme.typography.h5 = { fontFamily: 'Yatra One', color: "#f4a064", fontWeight: "500" };

export default theme;
