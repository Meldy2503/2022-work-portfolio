import styled from "styled-components";
import bg1 from "../../assests/img002.jpg";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const Contents = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.96),
      rgba(0, 0, 0, 0.75)
    ),
    url(${bg1});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const Col = styled.div`
  width: 90%;
  margin: 0 auto;
  position: absolute;
  max-width: 120rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 95%;
  }

  div {
    color: #fff;
  }

  span {
    color: #ad974f;
    font-weight: bold;
  }

  h5 {
    font-weight: 500;
    font-size: 1.8rem;
    color: rgba(255, 255, 255, 0.7);
  }

  h1 {
    font-size: 6.5rem;
    line-height: 1.07;
    margin: 2rem 0 0 0;
    font-family: "Noto Sans", sans-serif;
    font-weight: 700;
    letter-spacing: 0.2rem;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      font-size: 5rem;
    }
    @media (max-width: 500px) {
      font-size: 4rem;
    }
  }

  p {
    font-size: 1.8rem;
    font-family: "Raleway", sans-serif;
    width: 65%;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 2rem;
    line-height: 1.45;
    letter-spacing: 0.1rem;
    font-weight: 500;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      width: 70%;
      font-size: 1.6rem;
    }
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

export const TypedText = styled.span`
  p {
    display: flex;
  }
`;

export const Btn = styled.span`
  display: flex;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
export const ScrollDown = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  animation: move 3s ease-in-out infinite;
  overflow: hidden;

  @keyframes move {
    0% {
      opacity: 0.1;
      transform: translateY(-50px);
    }

    33% {
      opacity: 0.7;
      transform: translateY(-20px);
    }
    66% {
      opacity: 0.1;
      transform: translateY(-50px);
    }

    100% {
      opacity: 0.7;
      transform: translateY(-20px);
    }
  }

  span {
    color: #eaeaea;
    font-size: 3rem;
    text-align: center;
    display: block;
  }
`;
