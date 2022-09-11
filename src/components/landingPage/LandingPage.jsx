import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";

import TypewriterComponent from "typewriter-effect";
import {
  Container,
  Contents,
  Col,
  Btn,
  Button,
  ButtonC,
  BackToTop,
  TypedText,
  IconsContainer,
} from "./landingPageStyle";

const LandingPage = () => {
  const [scrollToTop, setScrollToTop] = React.useState(false);

  const handleScrollToTop = () => {
    window.scrollY > 300 ? setScrollToTop(true) : setScrollToTop(false);
  };
  window.addEventListener("scroll", handleScrollToTop);

  return (
    <Container id="landing-page">
      <Contents>
        <Col>
          <div data-aos="zoom-in">
            <h5>
              &#128075; HELLO THERE, I'M&nbsp;<span>EMELDER</span>
            </h5>
            <h1>A FRONTEND DEVELOPER</h1>
            <p>
              I'm a creative developer devoted to crafting user friendly and
              interactive frontend applications focused on simplicity and
              purpose.
            </p>
            <TypedText>
              <p>
                I'm proficient in&nbsp;<span>{"<"}</span>&nbsp;
              </p>
              <TypewriterComponent
                options={{
                  cursor: " />",
                  strings: [
                    "HTML",
                    "CSS",
                    "jS",
                    "React",
                    "SC",
                    "Tailwind",
                    "MUI",
                    "SASS",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              ></TypewriterComponent>
            </TypedText>
            <Btn>
              <ButtonC href="#contact">Get in Touch</ButtonC>
              <Button href="#projects">View Projects</Button>
            </Btn>
          </div>
        </Col>
      </Contents>
      <BackToTop href="#landing-page" scrollToTop={scrollToTop}>
        <span>
          <BsArrowUpCircleFill />
        </span>
      </BackToTop>
      <IconsContainer>
        <a
          href="https://www.linkedin.com/in/emelder-okafor-67b22122b"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icons">
            <AiFillLinkedin />
          </span>
        </a>
        <a
          href="https://github.com/meldy2503/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icons">
            <AiOutlineGithub />
          </span>
        </a>
        <a
          href="mailto:emelder.charles25@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icons last">
            <AiOutlineMail />
          </span>
        </a>
        <a
          href="https://www.facebook.com/emelder-charles"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icons">
            <FaFacebook />
          </span>
        </a>
        <a
          href="https://www.twitter.com/EmelderOkafor"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icons last">
            <FaTwitter />
          </span>
        </a>

        <div></div>
      </IconsContainer>
    </Container>
  );
};

export default LandingPage;
