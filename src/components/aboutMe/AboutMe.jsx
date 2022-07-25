import React from "react";
import { SubHeading } from "../reuseableComponents/headingStyle";
import { FaDownload } from "react-icons/fa";
import avatar from "../../assests/about1.png";
import { Button } from "../reuseableComponents/buttonStyle";
import Services from "../services/Services";
import { AboutData } from "./aboutMeData";
import myCv from "../../assests/Emelder-Okafor-CV.pdf";
import {
  Container,
  Contents,
  Row,
  Details,
  ImageContainer,
  TextContainer,
  Interests,
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
                HTML, CSS, JS(ES6), React and other technologies for developing
                user friendly interfaces. I have a good understanding of
                relational databases as well as solid computer software
                foundations such as DOM manipulations and complex alogrithms.
              </p>
              <p>
                I'm a team player, a fast and lifelong learner always willing to
                learn more technologies to become a better developer and I have
                excellent communication skills in English.
              </p>

              <Cv data-aos="fade-up">
                <Button href={myCv} mgt="0" bor="none" target="_blank">
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
