import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../reuseableComponents/buttonStyle";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import {
  Container,
  DisplayContents,
  Col1,
  Col2,
  RightArrow,
  LeftArrow,
} from "./landingPageStyle";

const LandingPage = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <RightArrow onClick={onClick}>
        <FaAngleRight />
      </RightArrow>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <LeftArrow onClick={onClick}>
        <FaAngleLeft />
      </LeftArrow>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    initialSlide: 0,
    arrows: false,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Container id="landing-page">
      <DisplayContents>
        <Slider {...settings}>
          <Col1>
            <div>
              <h5>
                &#128075; HELLO THERE, MY NAME IS&nbsp;<span>EMELDER</span>
              </h5>

              <h1>A Frontend Developer</h1>
              <p>
                I'm a lifelong learner who loves creating scalable, maintainable
                and responsive web designs with great user experience
              </p>
              <Button href="#contact" bgc="#07011fcc">
                Get in Touch
              </Button>
            </div>
          </Col1>
          <Col2>
            <div>
              <h2>I Love What I do</h2>
              <Button href="#projects" bgc="#07011fcc">
                View Projects
              </Button>
            </div>
          </Col2>
        </Slider>
      </DisplayContents>
    </Container>
  );
};

export default LandingPage;
