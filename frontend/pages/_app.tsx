import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import Layout from "components/layouts";

import "../styles/globals.css";

declare module "@mui/material/styles" {
  interface Palette {
    mainColor: string;
    headerBg: string;
  }
  interface PaletteOptions {
    mainColor: string;
    headerBg: string;
  }
}

const theme = createTheme({
  palette: {
    mainColor: red[500],
    headerBg: "#f8f5f0",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          borderColor: red[500],
          color: "black",
          height: "40px",
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
