import React from "react";
import { ProjectData } from "./projectData";
import { SubHeading } from "../reuseableComponents/headingStyle";

import {
  Container,
  Contents,
  Row,
  Column,
  Card,
  FrontText,
  BackText,
  ButtonG,
  ButtonW,
} from "./projectStyle";

const Projects = () => {
  return (
    <Container id="projects">
      <Contents>
        <SubHeading data-aos="fade-up">Projects</SubHeading>
        <Row>
          <Column>
            {ProjectData.map((project) => (
              <Card key={project.id} data-aos="flip-right">
                <div className="card_side card_side--front">
                  <FrontText>
                    <figure>
                      <img src={project.img} alt="project capture" />
                      <figcaption>
                        <h3>{project.name}</h3>
                      </figcaption>
                    </figure>
                  </FrontText>
                </div>
                <div className="card_side card_side--back">
                  <BackText>
                    <p>{project.comment}</p>
                    <div>
                      <ButtonW
                        href={project.web}
                        target="_blank"
                        rel="noreferrer"
                      >
                        website
                      </ButtonW>
                      <ButtonG
                        href={project.git}
                        target="_blank"
                        rel="noreferrer"
                      >
                        github
                      </ButtonG>
                    </div>
                  </BackText>
                </div>
              </Card>
            ))}
          </Column>
        </Row>
      </Contents>
    </Container>
  );
};

export default Projects;
