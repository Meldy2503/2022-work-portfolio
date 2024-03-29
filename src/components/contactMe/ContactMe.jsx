import React, { useState } from "react";
import { ButtonB } from "../reuseableComponents/buttonStyle";
import { FormInputs, MediaData } from "./contactMeData";
import PopUp from "../popUp/PopUp";
import { send } from "emailjs-com";
import {
  Container,
  Contents,
  Row,
  Col1,
  Title,
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
    message: "",
  });

  const handlePopup = () => {
    formData.name === ""
      ? setPopup(false)
      : formData.email === ""
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
      process.env.REACT_APP_PUBLIC_KEY
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
          <Col1 data-aos="fade-left">
            <Title>
              <h3>Need a beautiful, fast and interactive website?</h3>
              <h1>LET'S GET IT STARTED</h1>
            </Title>
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
                rows="10"
                placeholder="Message"
                required
              ></textarea>
              <br />
              <ButtonB type="submit" onClick={handlePopup}>
                SEND MESSAGE
              </ButtonB>
            </Form>
          </Col1>
          <Col2 data-aos="fade-right">
            <h2>CODE & DESIGN PRESENCE</h2>
            <p>Platforms I code and connect with.</p>
            <MediaContents>
              {MediaData.map((list) => (
                <Media>
                  <a href={list.link} target="_blank" rel="noreferrer">
                    <div>
                      <h3>{list.title}</h3>
                      <p>{list.text}</p>
                    </div>
                    <span className="icons">{list.icon}</span>
                  </a>
                </Media>
              ))}
            </MediaContents>
          </Col2>
        </Row>
      </Contents>

      {popup && <PopUp />}
    </Container>
  );
};

export default ContactMe;
