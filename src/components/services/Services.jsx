import React from "react";
import { ServicesData } from "./servicesData";
import { SubHeading } from "../reuseableComponents/headingStyle";
import { Container, Contents, Card } from "./servicesStyle";

const Services = () => {
  return (
    <Container>
      <Contents>
        <SubHeading>Services</SubHeading>
        <Card>
          {ServicesData.map((cards) => (
            <div key={cards.id}>
              <span>{cards.icon}</span>
              <h4>{cards.heading}</h4>
              <p>{cards.text}</p>
            </div>
          ))}
        </Card>
      </Contents>
    </Container>
  );
};

export default Services;
