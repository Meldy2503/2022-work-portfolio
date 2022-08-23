import React from "react";
import { FaHandPointDown } from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";
import {
  Container,
  Contents,
  Col,
  Btn,
  Button,
  ButtonC,
  ScrollDown,
  TypedText,
} from "./landingPageStyle";

const LandingPage = () => {
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
              A creative developer devoted to crafting user friendly and
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
        <ScrollDown href="#about-me">
          <span>
            <FaHandPointDown />
          </span>
        </ScrollDown>
      </Contents>
    </Container>
  );
};

export default LandingPage;
