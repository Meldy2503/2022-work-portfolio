import React from "react";
import { Button } from "../reuseableComponents/buttonStyle";
import { FaHandPointDown } from "react-icons/fa";
import { Container, Contents, Col, Btn, ScrollDown } from "./landingPageStyle";

const LandingPage = () => {
  return (
    <Container id="landing-page">
      <Contents>
        <Col>
          <div>
            <h5>
              &#128075; HELLO THERE, MY NAME IS&nbsp;<span>EMELDER</span>
            </h5>

            <h1>A Frontend Developer</h1>
            <p>
              I'm a creative developer who designs scalable, user friendly,
              interactive and responsive frontend applications.
            </p>
            <Btn>
              <Button
                href="#contact"
                mgr="2rem"
                mgsr="0"
                mgst="4rem"
                bgc="rgba(30, 67, 86)"
              >
                Get in Touch
              </Button>
              <Button
                href="#projects"
                bxs="0 8rem 0 0 #68a4c4 inset, 0 -8rem 0 0 #68a4c4 inset"
                co="#444"
                coh="#fff"
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
