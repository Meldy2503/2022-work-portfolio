import React from "react";
import { Button } from "../reuseableComponents/buttonStyle";
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
          <Button
            href="/"
            width="80%"
            mgt="3rem"
            mgst="3rem"
            bgc="#ad974f"
            bor="none"
            bxs="inset 30rem 0 0 0 #8e793e"
            coh="#fff"
          >
            OK
          </Button>
        </div>
      </PopMessage>
    </Container>
  );
};

export default PopUp;
