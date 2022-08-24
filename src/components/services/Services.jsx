import React from "react";
import { ServicesData } from "./servicesData";
import { SubHeading } from "../reuseableComponents/headingStyle";
import { Container, Contents, CardContainer, Card } from "./servicesStyle";

const Services = () => {
  return (
    <Container>
      <Contents>
        <SubHeading data-aos="fade-up">Services</SubHeading>
        <CardContainer>
          {ServicesData.map((cards) => (
            <Card key={cards.id}>
              <div>
                <span>{cards.icon}</span>
                <h4>{cards.heading}</h4>
                <p>{cards.text}</p>
              </div>
            </Card>
          ))}
        </CardContainer>
      </Contents>
    </Container>
  );
};

export default Services;
