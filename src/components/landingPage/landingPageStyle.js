import styled from "styled-components";
import bg1 from "../../assests/bgimg1.jpeg";
import bg2 from "../../assests/bgimg2.jpeg";
export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;
`;
export const DisplayContents = styled.div`
  display: block;

  .slick-dots li button:before {
    font-size: 1.4rem;
    color: #fff;
    margin-top: -5rem;
  }
`;
export const Col1 = styled.div`
  height: 100vh;
  background-image: url(${bg1});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  filter: contrast(110%) brightness(115%);

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #eee;
    width: 85%;

    h1,
    h2 {
      color: #fff;
      font-size: 4.5rem;
      line-height: 1.07;
      margin: 1rem 0;
      font-family: "Noto Sans", sans-serif;
      font-weight: 700;
      letter-spacing: 0.2rem;
      z-index: -1;
    }

    p {
      font-size: 2rem;
      font-family: "Raleway", sans-serif;
    }
  }
`;
export const Col2 = styled(Col1)`
  background-image: url(${bg2});
`;

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 3rem;
  z-index: 700;
  color: #c4c4c4;
  background-color: transparent;
  cursor: pointer;
  font-size: 3rem;
`;

export const LeftArrow = styled(RightArrow)`
  left: 3rem;
`;
