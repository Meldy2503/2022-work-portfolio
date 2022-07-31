import React from "react";
import { ButtonC } from "../reuseableComponents/buttonStyle";
import { PopMessage, Container } from "./popUpStyle";
import thumbsUp from "../../assests/thumbs-up.png";

const PopUp = () => {
  return (
    <Container data-aos="zoom-in">
      <PopMessage>
        <div>
          <img src={thumbsUp} alt="emoji" />
          <p>
            Thanks for reaching out ! <br /> I will get back to you as soon as
            possible
          </p>
          <ButtonC href="/" width="70%" mgt="3rem" mgst="3rem">
            OK
          </ButtonC>
        </div>
      </PopMessage>
    </Container>
  );
};

export default PopUp;
