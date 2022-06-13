import React, { useState } from "react";
import { SubHeading } from "../reuseableComponents/headingStyle";
import { ButtonB } from "../reuseableComponents/buttonStyle";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
// import PopUp from "../Pop-up/PopUp";
import { FaPhoneAlt } from "react-icons/fa";
import { FormInputs } from "./contactMeData";
import {
  Container,
  Contents,
  Row,
  Col1,
  Col2Form,
  Media,
} from "./contactMeStyle";

const ContactMe = () => {
  // const [popup, setPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // const handlePopup = () => {
  //   formData.name === ""
  //     ? setPopup(false)
  //     : formData.email === ""
  //     ? setPopup(false)
  //     : formData.phone === ""
  //     ? setPopup(false)
  //     : formData.subject === ""
  //     ? setPopup(false)
  //     : formData.message === ""
  //     ? setPopup(false)
  //     : setPopup((prevState) => !prevState);
  // };

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container id="contact">
      <Contents>
        <SubHeading>Contact Me</SubHeading>
        <Row>
          <Col1>
            <Media>
              <FaPhoneAlt className="icons" />
              <p>+2348037588098</p>
            </Media>
            <Media>
              <span className="icons">
                <AiOutlineMail />
              </span>
              <a
                href="mailto:emelder.charles25@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                mailto:emelder.charles25
                <br />
                @gmail.com
              </a>
            </Media>
            <Media>
              <span className="icons">
                <AiOutlineGithub />
              </span>
              <a
                href="https://github.com/meldy2503/"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/meldy2503/
              </a>
            </Media>
            <Media>
              <span className="icons">
                <AiFillLinkedin />
              </span>
              <a
                href="https://www.linkedin.com/in/emelder-okafor-67b22122b"
                target="_blank"
                rel="noreferrer"
              >
                "https://www.linkedin.com/in/
                <br />
                emelder-okafor-67b22122b"
              </a>
            </Media>
          </Col1>
          <Col2Form onSubmit={onSubmit}>
            {FormInputs.map((inputs) => (
              <div key={inputs.id}>
                <input
                  type={inputs.type}
                  name={inputs.name}
                  id={inputs.idty}
                  onChange={handleFormData}
                  value={formData[inputs.value]}
                  placeholder={inputs.placeholder}
                  required
                />
              </div>
            ))}

            <textarea
              name="message"
              id="message"
              cols="30"
              value={formData.value}
              onChange={handleFormData}
              rows="6"
              placeholder="Message"
              required
            ></textarea>
            {/* <ButtonB width="80%" type="submit" onClick={handlePopup}> */}
            <ButtonB type="submit" onClick="">
              SEND MESSAGE
            </ButtonB>
          </Col2Form>
        </Row>
      </Contents>
      {/* {popup && <PopUp />} */}
    </Container>
  );
};

export default ContactMe;
