import React, { useState } from "react";
import { SubHeading } from "../reuseableComponents/headingStyle";
import { ButtonB } from "../reuseableComponents/buttonStyle";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import PopUp from "../popUp/PopUp";
import { FaPhoneAlt } from "react-icons/fa";
import { FormInputs } from "./contactMeData";
import { send } from "emailjs-com";
import {
  Container,
  Contents,
  Row,
  Col1,
  Col2,
  Form,
  MediaContents,
  Media,
} from "./contactMeStyle";

const ContactMe = () => {
  const [popup, setPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handlePopup = () => {
    formData.name === ""
      ? setPopup(false)
      : formData.email === ""
      ? setPopup(false)
      : formData.phone === ""
      ? setPopup(false)
      : formData.subject === ""
      ? setPopup(false)
      : formData.message === ""
      ? setPopup(false)
      : setPopup((prevState) => !prevState);
  };

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_PUBLIC_ID
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    console.log(formData);
  };

  return (
    <Container id="contact">
      <Contents>
        <Row>
          <Col1>
            <SubHeading width="25%" color="#fff">
              Get in Touch With Me
            </SubHeading>
            <MediaContents>
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
                  emelder.charles25gmail.com
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
                  github.com/meldy2503/
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
                  linkedin.com/in/emelder-okafor-67b22122b
                </a>
              </Media>
            </MediaContents>
          </Col1>
          <Col2>
            <Form onSubmit={onSubmit}>
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
                rows="4"
                placeholder="Message"
                required
              ></textarea>
              <br />
              <ButtonB type="submit" onClick={handlePopup}>
                SEND MESSAGE
              </ButtonB>
            </Form>
          </Col2>
        </Row>
      </Contents>

      {popup && <PopUp />}
    </Container>
  );
};

export default ContactMe;
