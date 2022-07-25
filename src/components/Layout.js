import React from "react";
import Navbar from "./navbar/Navbar";
import LandingPage from "./landingPage/LandingPage";
import AboutMe from "./aboutMe/AboutMe";
import TechStack from "./techStack/TechStack";
import Projects from "./projects/Projects";
import ContactMe from "./contactMe/ContactMe";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <AboutMe />
      <TechStack />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Layout;
