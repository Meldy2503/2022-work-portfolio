import React from "react";
import { SkillData, ToolData } from "./techStackData";
import { SubHeading } from "../reuseableComponents/headingStyle";
import computerImg from "../../assests/IMG1.png";
import {
  Container,
  Contents,
  Row,
  Col1,
  Skills,
  Tools,
  IconsContainer,
  Col2,
} from "./techStackStyle";

const TechStack = () => {
  return (
    <Container id="skills">
      <Contents>
        <SubHeading>Tech Stack</SubHeading>
        <Row>
          <Col1>
            <Skills>
              <h3>Languages and Frameworks</h3>
              <IconsContainer>
                {SkillData.map((skills) => (
                  <figure key={skills.id}>
                    <img src={skills.src} alt={skills.alt} />
                    <figcaption>{skills.caption}</figcaption>
                  </figure>
                ))}
              </IconsContainer>
            </Skills>
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
          </Col1>
          <Col2>
            <img src={computerImg} alt="computer img" />
          </Col2>
        </Row>
      </Contents>
    </Container>
  );
};

export default TechStack;
