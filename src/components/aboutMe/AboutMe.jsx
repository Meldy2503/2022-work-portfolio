import React from "react";
import { SubHeading } from "../reuseableComponents/headingStyle";
import { FaDownload } from "react-icons/fa";
import avatar from "../../assests/tech1.jpg";
import { Button } from "../reuseableComponents/buttonStyle";
import Services from "../services/Services";
import { AboutData } from "./aboutMeData";
import myCv from "../../assests/EmelderOkafor-CV.pdf";
import {
  Container,
  Contents,
  Row,
  ImageContainer,
  TextContainer,
  Interests,
  Col1,
  Col2,
  Cv,
} from "./aboutMeStyle";

const AboutMe = () => {
  return (
    <Container id="about-me">
      <Contents>
        <SubHeading>About Me</SubHeading>
        <Row>
          <ImageContainer>
            <div>
              <img src={avatar} alt="avatar" />
            </div>
          </ImageContainer>
          <TextContainer>
            <p>
              I'm a success driven and determined frontend developer who loves
              creating maintainable, scalable and responsive web designs using
              HTML, CSS, Js, React and other technologies for developing user
              friendly interfaces. I'm a lifelong learner, a team player and I
              have excellent communication skills in English.
            </p>
            <Interests>
              <Col1>
                <h3>EDUCATION</h3>
                <p>
                  I'm a graduate of Electrical Engineering (B.Eng) from Nnamdi
                  Azikiwe University, Awka, Anambra State, Nigeria.
                </p>
              </Col1>
              <Col2>
                <h3>INTERESTS</h3>
                <div>
                  {AboutData.map((list) => (
                    <span key={list.id}>
                      {list.icon}
                      <p>{list.text}</p>
                    </span>
                  ))}
                </div>
              </Col2>
            </Interests>
            <Cv>
              <Button
                href={myCv}
                bgc="#5688a3"
                bor="none"
                bxs="inset 30rem 0 0 0 rgba(30,67,87,0.8)"
                coh="#fff"
                target="_blank"
              >
                View CV <FaDownload className="icon" />
              </Button>
            </Cv>
          </TextContainer>
        </Row>
      </Contents>
      <Services />
    </Container>
  );
};

export default AboutMe;
