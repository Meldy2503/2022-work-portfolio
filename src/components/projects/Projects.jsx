import React from "react";
import { ProjectData } from "./ProjectData";
import { SubHeading } from "../ReuseableComponents/headingStyle";
// import {
//   ProjectContainer,
//   Contents,
//   Row,
//   Column,
//   Card,
//   FrontText,
//   BackText,
// } from "./ProjectStyle";

const Projects = () => {
  return (
    <Container id="projects">
      <Contents>
        <SubHeading>Projects</SubHeading>
        <Row>
          <Column>
            {ProjectDataFront.map((project) => (
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
                    <h3>Project Purpose and Goal</h3>
                    <p>{project.comment}</p>
                    <div>
                      <a href={project.web} target="_blank" rel="noreferrer">
                        website
                      </a>
                      <a href={project.git} target="_blank" rel="noreferrer">
                        github
                      </a>
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
