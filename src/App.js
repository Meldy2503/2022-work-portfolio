import { Fragment, useEffect } from "react";
import Layout from "./components/Layout";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const theme = {
    color: {
      primary: "#b68421",
    },

    media: {
      smobile: "420px",
      mobile: "768px",
      tablet: "960px",
      desktop: "1440px",
    },
  };

  useEffect(() => {
    Aos.init({
      duration: 1500,
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
