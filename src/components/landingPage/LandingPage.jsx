import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg1 from "../../assests/bgimg1.jpeg";
import bg2 from "../../assests/bgimg2.jpeg";
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
            <img src={bg1} alt="bg-1" />
            {/* <h1>hi</h1> */}
          </Col1>
          <Col2>
            <img src={bg2} alt="bg-2" />
            {/* <h1>hello</h1> */}
          </Col2>
        </Slider>
      </DisplayContents>
    </Container>
  );
};

export default LandingPage;
