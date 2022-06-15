import styled from "styled-components";
import bg1 from "../../assests/bgimg1.jpeg";
import bg2 from "../../assests/bgimg2.jpeg";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
export const SlidingContents = styled.div`
  display: block;

  .slick-dots li button:before {
    font-size: 1.4rem;
    color: #fff;
    margin-top: -5rem;
  }
`;
export const Col1 = styled.div`
  height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(9, 4, 32, 0.7),
      rgba(9, 4, 32, 0.7)
    ),
    url(${bg1});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: contrast(100%) brightness(130%);

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #eee;
    width: 90%;
    max-width: 120rem;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      width: 95%;
      margin: 0 auto;
    }

    h1,
    h2 {
      color: #fff;
      font-size: 6rem;
      line-height: 1.07;
      margin: 2.5rem 0 0 0;
      font-family: "Noto Sans", sans-serif;
      font-weight: 700;
      letter-spacing: 0.3rem;

      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        font-size: 4.5rem;
      }
    }

    h5 {
      font-weight: 500;
      font-size: 1.8rem;
      color: rgba(255, 255, 255, 0.6);

      span {
        color: #fff;
      }
    }

    p {
      font-size: 1.9rem;
      font-family: "Raleway", sans-serif;
      width: 70%;
      color: rgba(255, 255, 255, 0.67);
      margin-top: 3.5rem;
      line-height: 1.45;
      letter-spacing: 0.1rem;

      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        width: 90%;
      }
    }
  }
`;
export const Col2 = styled(Col1)`
  background-image: linear-gradient(
      to right,
      rgba(9, 4, 32, 0.8),
      rgba(9, 4, 32, 0.8)
    ),
    url(${bg2});

  div {
    text-align: center;
  }
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
