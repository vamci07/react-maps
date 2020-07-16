import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";

export function myTheme(themeName) {
  let theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Nunito",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    palette: {
      type: themeName || 'light',
      primary: {
        main: blue[900],
      },
      secondary: {
        main: pink[500],
      },
    },
  });

  theme = responsiveFontSizes(theme);
  return theme;
}
