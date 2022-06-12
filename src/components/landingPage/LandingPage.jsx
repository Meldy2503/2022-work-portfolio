import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../reuseableComponents/buttonStyle";

// import bg2 from "../../assests/bgimg2.jpeg";
import { Container, DisplayContents, Col1, Col2 } from "./landingPageStyle";

const LandingPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
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
              <p>Hi, I'm</p>
              <h1>Emelder Okafor</h1>
              <p>A Frontend Developer</p>
              <Button>Get in Touch</Button>
            </div>
          </Col1>
          <Col2>
            <div>
              <h2>I Love What I do</h2>
              <Button>View Projects</Button>
            </div>
          </Col2>
        </Slider>
      </DisplayContents>
    </Container>
  );
};

export default LandingPage;
