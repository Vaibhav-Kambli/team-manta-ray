import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: 12,
    h1: {},
    h2: {},
    h3: {},
    h4: {
      fontWeight: "medium",
    },
    h5: {},
    h6: {},
    body1: {
      color: "#000",
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "1.6",
    },
    body2: {
      color: "#000",
      opacity: "0.403921568627451",
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "1.6",
    },
    subtitle1: {},
    subtitle2: {},
  },
  palette: {
    primary: { main: "#DF1B1B" },
    secondary: { main: "#FF510C" },
    cardBackground: { main: "#fff" },
  },
});
