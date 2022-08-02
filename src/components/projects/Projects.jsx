import React from "react";
import { ProjectData } from "./ProjectData";
import { SubHeading } from "../reuseableComponents/headingStyle";

import {
  Container,
  Contents,
  CardWrapper,
  Row,
  Col1,
  Col2,
  Figure,
  Techs,
  Tick,
  Live,
  Code,
  Overlay,
  ButtonG,
  ButtonW,
} from "./projectStyle";

const Projects = () => {
  return (
    <Container id="projects">
      <Contents>
        <SubHeading data-aos="fade-up">Projects</SubHeading>
        <CardWrapper>
          {ProjectData.map((project) => (
            <Row key={project.id} flexd={project.id % 2 === 0 && "row-reverse"}>
              <Col1 data-aos="fade-right">
                <Figure>
                  <img src={project.img} alt="project capture" />
                  <Overlay>
                    <span>
                      <ButtonW
                        href={project.web}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Live />
                        live
                      </ButtonW>
                      <ButtonG
                        href={project.git}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Code />
                        code
                      </ButtonG>
                    </span>
                    <p>0{project.id}</p>
                  </Overlay>
                </Figure>
              </Col1>
              <Col2 data-aos="fade-left">
                <div>
                  <h2>{project.name}</h2>
                  <p>{project.about}</p>
                  <article>
                    <h3>Features of this Project</h3>
                    <p>{project.features}</p>
                  </article>
                </div>
                <Techs>
                  <h3>Tech Stack</h3>
                  <div>
                    {project.tech.map((list, index) => (
                      <span key={index}>
                        <Tick />
                        <p>{list}</p>
                      </span>
                    ))}
                  </div>
                </Techs>
              </Col2>
            </Row>
          ))}
        </CardWrapper>
      </Contents>
    </Container>
  );
};

export default Projects;
