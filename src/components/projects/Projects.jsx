import React from "react";
import { ProjectData } from "./projectData";
// import { GrStatusGood } from "react-icons/gr";
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
  Figcaption,
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
        {/* <SubHeading data-aos="fade-up">Projects</SubHeading> */}
        <SubHeading>Projects</SubHeading>
        <CardWrapper>
          {ProjectData.map((project) => (
            <Row key={project.id} flexd={project.id % 2 === 0 && "row-reverse"}>
              <Col1>
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
                  </Overlay>

                  <Figcaption>
                    <p>0{project.id}</p>
                    {/* <h3>{project.name}</h3> */}
                  </Figcaption>
                </Figure>
              </Col1>
              <Col2>
                <div>
                  <h2>{project.name}</h2>
                  <p>{project.about}</p>
                  <article>
                    <h3>Challenges The Project Solved</h3>
                    <p>{project.challenges}</p>
                  </article>
                </div>
                <Techs>
                  <h3>Tech Stack</h3>
                  {project.tech.map((list, index) => (
                    <div key={index}>
                      <Tick />
                      <p>{list}</p>
                    </div>
                  ))}
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
