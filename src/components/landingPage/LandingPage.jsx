import React from "react";
import { Button } from "../reuseableComponents/buttonStyle";
import { FaHandPointDown } from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";
import {
  Container,
  Contents,
  Col,
  Btn,
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
            <h1>Frontend Developer</h1>
            <p>
              A creative developer devoted to crafting beautiful, user friendly
              and interactive frontend applications focused on simplicity and
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
              <Button href="#projects" mgr="2rem" mgsr="0" mgst="4rem">
                View Projects
              </Button>
              <Button href="#contact" pad="1.5rem 4.3rem">
                Get in Touch
              </Button>
            </Btn>
          </div>
        </Col>
        <ScrollDown>
          <span>
            <FaHandPointDown />
          </span>
        </ScrollDown>
      </Contents>
    </Container>
  );
};

export default LandingPage;
