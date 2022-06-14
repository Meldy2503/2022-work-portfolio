import React from "react";
import { Button } from "../reuseableComponents/buttonStyle";
import { PopMessage, Container } from "./popUpStyle";
import thumbsUp from "../../assests/thumbs-up.png";

const PopUp = () => {
  return (
    <Container>
      <PopMessage>
        <div>
          <img src={thumbsUp} alt="emoji" />
          <p>
            Thanks for reaching out ! <br /> I will get back to you as soon as
            possible
          </p>
          <Button href="/" width="80%" mgt="3rem" bgc="#090420e6">
            OK
          </Button>
        </div>
      </PopMessage>
    </Container>
  );
};

export default PopUp;
