import React from "react";
import { ProjectData } from "./projectData";
import { SubHeading } from "../reuseableComponents/headingStyle";

import {
  Container,
  Contents,
  Row,
  Card,
  Figure,
  ButtonG,
  ButtonW,
} from "./projectStyle";

const Projects = () => {
  return (
    <Container id="projects">
      <Contents>
        {/* <SubHeading data-aos="fade-up">Projects</SubHeading> */}
        <SubHeading>Projects</SubHeading>
        <Row>
          {ProjectData.map((project) => (
            <Card key={project.id} data-aos="flip-right">
              <ButtonW href={project.web} target="_blank" rel="noreferrer">
                live
              </ButtonW>
              <ButtonG href={project.git} target="_blank" rel="noreferrer">
                code
              </ButtonG>
              <Figure>
                <img src={project.img} alt="project capture" />
                <h2>{project.name}</h2>
                <p>{project.comment}</p>
                {/* {ProjectData.tech.map((list, index) => (
                    <div key={list.index}>
                      <span></span>
                      <p>{list[index]}</p>
                    </div>
                  ))} */}
                <figcaption>
                  <h3>{project.name}</h3>
                  {/* <ButtonW
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
                    </ButtonG> */}
                </figcaption>
              </Figure>
            </Card>
          ))}
        </Row>
      </Contents>
    </Container>
  );
};

export default Projects;
