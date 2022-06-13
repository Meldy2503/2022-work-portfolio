import React from "react";
import { Button } from "../reuseableComponents/buttonStyle";
import { PopMessage, Container } from "./popUpStyle";
import thumbsUp from "../../img/thumbs-up.png";

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
          <Button href="/">OK</Button>
        </div>
      </PopMessage>
    </Container>
  );
};

export default PopUp;
