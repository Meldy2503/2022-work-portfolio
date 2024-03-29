import { Fragment, useEffect } from "react";
import Layout from "./components/Layout";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const theme = {
    color: {
      primary: "#ffc75f",
    },

    media: {
      smobile: "420px",
      mobile: "767px",
      tablet: "960px",
      desktop: "1440px",
    },
  };

  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Layout />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
