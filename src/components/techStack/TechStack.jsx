import React from "react";
import { FrameworkData, ToolData, LanguageData } from "./techStackData";
import { SubHeading } from "../reuseableComponents/headingStyle";
import {
  Container,
  Contents,
  Row,
  Languages,
  Tools,
  IconsContainer,
  Frameworks,
} from "./techStackStyle";

const TechStack = () => {
  return (
    <Container id="skills">
      <Contents>
        <SubHeading color="#fff" data-aos="fade-up">
          Tech Stack
        </SubHeading>
        <Row>
          <Languages>
            <h3 data-aos="zoom-in">Languages</h3>
            <IconsContainer>
              {LanguageData.map((lang) => (
                <figure key={lang.id} data-aos="zoom-in">
                  <img src={lang.src} alt={lang.alt} />
                  <figcaption>{lang.caption}</figcaption>
                </figure>
              ))}
            </IconsContainer>
          </Languages>
          <Frameworks>
            <h3 data-aos="zoom-in">Libraries and Frameworks</h3>
            <IconsContainer>
              {FrameworkData.map((frameworks) => (
                <figure key={frameworks.id} data-aos="zoom-in">
                  <img src={frameworks.src} alt={frameworks.alt} />
                  <figcaption>{frameworks.caption}</figcaption>
                </figure>
              ))}
            </IconsContainer>
          </Frameworks>
          <Tools>
            <h3 data-aos="zoom-in">Tools</h3>
            <IconsContainer>
              {ToolData.map((tools) => (
                <figure key={tools.id} data-aos="zoom-in">
                  <img src={tools.src} alt={tools.alt} />
                  <figcaption>{tools.caption}</figcaption>
                </figure>
              ))}
            </IconsContainer>
          </Tools>
        </Row>
      </Contents>
    </Container>
  );
};

export default TechStack;
