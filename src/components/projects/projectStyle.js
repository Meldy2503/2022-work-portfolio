import styled from "styled-components";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiDesktopComputer } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  background: linear-gradient(to right, #343337, #222222);
  position: relative;
`;

export const Contents = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 10rem auto;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 95%;
    margin: 6rem auto;
  }
`;

export const CardWrapper = styled.div`
  margin-top: 4rem;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 3rem 6rem;
  background-color: #090909;
  margin-bottom: 4rem;
  width: 100%;
  align-items: center;
  flex-direction: ${({ flexd }) => flexd || "row"};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
    padding: 3rem 2rem;
  }
`;

export const Col1 = styled.div`
  width: 47%;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const Col2 = styled(Col1)`
  opacity: 0.9;

  p {
    margin: 0.6rem 0 2rem;
    line-height: 1.55;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #fff;
  }

  h3 {
    font-size: 1.8rem;
    color: #fff;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin-top: 8rem;
  }
`;
export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    transition: transform 0.6s ease-in-out;
    background: #343337;
    transform: scaleY(1);
    z-index: 1;
    transform-origin: bottom;
    opacity: 0.6;
  }

  &:hover::before {
    transform: scaleY(0);
    background: #222222;
    opacity: 0.6;
  }

  img {
    max-width: 100%;
  }
`;

export const ButtonW = styled.a`
  display: flex;
  align-items: center;
  color: #eaeaea;
  cursor: pointer;
`;
export const ButtonG = styled(ButtonW)``;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-self: center;
  justify-content: space-between;
  z-index: 2;
  transition: all 0.5s ease-out 0.3s;

  &:hover {
    opacity: 1;

    p {
      opacity: 0;
    }
  }

  span {
    position: absolute;
    bottom: -3.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    position: absolute;
    top: 0rem;
    right: 0;
    font-size: 10rem;
    font-weight: 500;
    opacity: 0.5;
  }
`;

export const Techs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  div {
    display: flex;
    align-items: center;
    margin-top: 1.2rem;
    flex-wrap: wrap;

    span {
      display: flex;
      border-radius: 0.6rem;
      padding: 0.7rem 1rem;
      margin: 0 1rem 1rem 0;
      align-items: center;
      background-color: #1a1a1a;
    }

    p {
      margin: 0;
    }
  }
`;
export const Tick = styled(IoIosCheckmarkCircle)`
  color: #ffc75f;
  font-size: 1.8rem;
  margin-right: 0.6rem;
`;
export const Live = styled(HiDesktopComputer)`
  color: #e90a0a;
  margin-right: 0.6rem;
  font-size: 2.7rem;
  opacity: 0.6;
`;
export const Code = styled(FaCode)`
  color: #d0d0d0;
  margin-right: 0.6rem;
  font-size: 2.7rem;
`;
