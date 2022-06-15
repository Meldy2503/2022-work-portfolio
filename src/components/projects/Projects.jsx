import React from "react";
import { ProjectData } from "./projectData";
import { SubHeading } from "../reuseableComponents/headingStyle";
import { Button } from "../reuseableComponents/buttonStyle";
import {
  Container,
  Contents,
  Row,
  Column,
  Card,
  FrontText,
  BackText,
  BackTextHeading,
} from "./projectStyle";

const Projects = () => {
  return (
    <Container id="projects">
      <Contents>
        <SubHeading color="#00102e">Projects</SubHeading>
        <Row>
          <Column>
            {ProjectData.map((project) => (
              <Card key={project.id}>
                <div className="card_side card_side--front">
                  <FrontText>
                    <div>
                      <img src={project.img} alt="project capture" />
                    </div>

                    <h3>{project.name}</h3>
                    <p>{project.tools}</p>
                  </FrontText>
                </div>
                <div className="card_side card_side--back">
                  <BackText>
                    <BackTextHeading
                      bg={project.id % 2 === 0 ? "#e64e4e" : "#47425d"}
                    >
                      Project Purpose and Goal
                    </BackTextHeading>
                    <p>{project.comment}</p>
                    <div>
                      <Button
                        href={project.web}
                        target="_blank"
                        rel="noreferrer"
                        bgc="#e64e4e"
                        bxs="-28rem 0 0 0 #47425d inset"
                        bor="0.2rem solid #47425d"
                      >
                        website
                      </Button>
                      <Button
                        href={project.git}
                        target="_blank"
                        rel="noreferrer"
                      >
                        github
                      </Button>
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
