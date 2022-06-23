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
        <SubHeading color="#fff">Tech Stack</SubHeading>
        <Row>
          <Languages>
            <h3>Languages</h3>
            <IconsContainer>
              {LanguageData.map((lang) => (
                <figure key={lang.id}>
                  <img src={lang.src} alt={lang.alt} />
                  <figcaption>{lang.caption}</figcaption>
                </figure>
              ))}
            </IconsContainer>
          </Languages>
          <Tools>
            <h3>Tools</h3>
            <IconsContainer>
              {ToolData.map((tools) => (
                <figure key={tools.id}>
                  <img src={tools.src} alt={tools.alt} />
                  <figcaption>{tools.caption}</figcaption>
                </figure>
              ))}
            </IconsContainer>
          </Tools>
          <Frameworks>
            <h3>Libraries and Frameworks</h3>
            <IconsContainer>
              {FrameworkData.map((frameworks) => (
                <figure key={frameworks.id}>
                  <img src={frameworks.src} alt={frameworks.alt} />
                  <figcaption>{frameworks.caption}</figcaption>
                </figure>
              ))}
            </IconsContainer>
          </Frameworks>
        </Row>
      </Contents>
    </Container>
  );
};

export default TechStack;
