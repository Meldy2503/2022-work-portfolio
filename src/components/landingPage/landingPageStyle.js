import styled from "styled-components";
import bg1 from "../../assests/bg1.jpg";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  color: #eaeaea;
  text-align: center;
`;

export const Contents = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.35)),
    url(${bg1});
  background-position: 0rem 7rem;
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
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 95%;
  }

  span {
    color: ${({ theme }) => theme.color.primary};
    font-weight: bold;
  }

  h5 {
    font-weight: 500;
    font-size: 1.8rem;
    color: #d0d0d0;
  }

  h5 > span {
    color: ${({ theme }) => theme.color.primary};
  }

  h1 {
    font-size: 5.5rem;
    line-height: 1.07;
    margin: 2rem 0 0 0;
    font-family: "Noto Sans", sans-serif;
    font-weight: 700;
    letter-spacing: 0.2rem;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      font-size: 4.5rem;
    }
    @media (max-width: 500px) {
      font-size: 3.5rem;
    }
  }

  div > p {
    font-family: "Raleway", sans-serif;
    width: 65%;
    margin: 1rem auto 0 auto;
    line-height: 1.5;
    letter-spacing: 0.1rem;
    font-weight: 500;
    color: #eaeaea;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      width: 70%;
    }
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

export const TypedText = styled.span`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto 0 auto;
  font-size: 1.8rem;

  p {
    margin-top: 0;
    letter-spacing: 0.1rem;
    color: #d0d0d0;
    font-family: "Raleway", sans-serif;
  }
`;

export const Btn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  @media (max-width: 500px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;
export const Button = styled.a`
  padding: 1.7rem 3.7rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  border: 0.2rem solid #fff;
  width: fit-content;
  font-family: "Montserrat", sans-serif;
  transition: all 0.7s;
  color: #fff;
  margin-left: 2.5rem;

  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: 2rem;
  }

  &:hover {
    box-shadow: -23rem 0 0 0 inset #ffc75f;
    border: 0.2rem solid #ffc75f;
    color: #000;
  }
`;

export const ButtonC = styled(Button)`
  color: ${({ theme }) => theme.color.primary};
  border: 0.2rem solid ${({ theme }) => theme.color.primary};
  padding: 1.7rem 4.5rem;

  &:hover {
    box-shadow: -23rem 0 0 0 inset #fff;
    border: 0.2rem solid #fff;
    color: #000;
  }
`;
export const ScrollDown = styled.a`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  animation: move 3s ease-in-out infinite;
  overflow: hidden;

  @keyframes move {
    0% {
      opacity: 0.2;
      transform: translateY(-40px);
    }

    33% {
      opacity: 0.7;
      transform: translateY(-20px);
    }
    66% {
      opacity: 0.2;
      transform: translateY(-40px);
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
