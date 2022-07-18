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
  Details,
  ImageContainer,
  TextContainer,
  Interests,
  Edu,
  Cv,
} from "./aboutMeStyle";

const AboutMe = () => {
  return (
    <Container id="about-me">
      <Contents>
        <SubHeading data-aos="fade-up">About Me</SubHeading>
        <Row data-aos="fade-up">
          <Details>
            <ImageContainer>
              <div data-aos="flip-right">
                <img src={avatar} alt="avatar" />
              </div>
            </ImageContainer>
            <TextContainer data-aos="flip-left">
              <p data-aos="fade-up">
                I'm a success driven and determined frontend developer who loves
                creating maintainable, scalable and responsive web designs using
                HTML, CSS, Js, React and other technologies for developing user
                friendly interfaces. I'm a lifelong learner, a team player and I
                have excellent communication skills in English.
              </p>
              <Edu data-aos="fade-up">
                <h3>EDUCATION</h3>
                <p>
                  I'm a graduate of Electrical Engineering (B.Eng) from Nnamdi
                  Azikiwe University, Awka, Anambra State, Nigeria.
                </p>
              </Edu>

              <Cv data-aos="fade-up">
                <Button
                  href={myCv}
                  mgt="0"
                  bgc="#8e793e"
                  bor="none"
                  bxs="inset 30rem 0 0 0 #ad974f"
                  coh="#fff"
                  target="_blank"
                >
                  View CV <FaDownload className="icon" />
                </Button>
              </Cv>
            </TextContainer>
          </Details>
          <Interests data-aos="fade-up">
            <h3>INTERESTS</h3>
            <div>
              {AboutData.map((list) => (
                <span key={list.id}>
                  {list.icon}
                  <p>{list.text}</p>
                </span>
              ))}
            </div>
          </Interests>
        </Row>
      </Contents>
      <Services />
    </Container>
  );
};

export default AboutMe;
