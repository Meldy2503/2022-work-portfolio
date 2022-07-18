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
              &#128075; HELLO THERE, MY NAME IS&nbsp;<span>EMELDER</span>
            </h5>
            <h1>Frontend Developer</h1>
            <p>
              A creative developer devoted to crafting beautiful, user friendly
              and interactive frontend applications focused on simplicity and
              purpose.
            </p>
            <TypedText>
              <p>
                I'm proficient in&nbsp;<span>{"<"}&nbsp;</span>
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
              </p>
            </TypedText>
            <Btn>
              <Button
                href="#contact"
                mgr="2rem"
                mgsr="0"
                mgst="4rem"
                bgc="#8e793e"
              >
                Get in Touch
              </Button>
              <Button
                href="#projects"
                bxs="0 8rem 0 0 #8e793e inset, 0 -8rem 0 0 #8e793e inset"
                co="#fff"
                coh="fff"
                bor=".2rem solid #fff"
                borh=".2rem solid #8e793e "
              >
                View Projects
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
