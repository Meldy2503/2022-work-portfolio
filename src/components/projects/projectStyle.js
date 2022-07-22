import styled from "styled-components";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiDesktopComputer } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  background-color: #1c1c1c;
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
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */
  /* background-color: red; */
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  background-color: rgb(0, 0, 0, 0.9);
  margin-bottom: 2rem;
  color: #d0d0d0;
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
    width: 100%;
  }
`;
export const Col2 = styled(Col1)``;
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
    background: linear-gradient(45deg, rgba(0, 16, 46), rgba(0, 31, 88));
    font-size: 9rem;
    text-align: end;
    font-family: "Sarabun", sans-serif;
    color: #fff;
    transform: scaleY(1);
    z-index: 1;
    transform-origin: bottom;
    opacity: 0.6;
  }

  &:hover::before {
    transform: scaleY(0);
    background: linear-gradient(45deg, rgba(0, 16, 46), rgba(0, 31, 88));
  }

  img {
    width: 100%;
  }

  h2 {
    margin: 2rem 0 1rem 0;
    text-align: center;
  }

  p {
    line-height: 1.55;
    margin-bottom: 1rem;
    /* font-size: 1.8rem; */
  }
`;
export const Techs = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;

  div {
    display: flex;
    margin: 0 1rem 1rem 0;
    align-items: center;
    background-color: #1c1c1c;
    padding: 0.7rem 1rem;
    border-radius: 0.6rem;

    img {
      /* background: linear-gradient(
        to right,
        rgb(0, 0, 0, 0.4),
        rgb(0, 0, 0, 0.5)
      ); */
      background-color: red;
      opacity: 0.6;
    }

    p {
      margin-bottom: 0;
    }
  }
`;
export const Tick = styled(IoIosCheckmarkCircle)`
  color: #e0a42b;
  font-size: 1.8rem;
  margin-right: 0.6rem;
`;
export const Live = styled(HiDesktopComputer)`
  color: #e90a0a;
  margin-right: 0.8rem;
  font-size: 2.5rem;
`;
export const Code = styled(FaCode)`
  color: #e90a0a;
  margin-right: 0.8rem;
  font-size: 2.5rem;
`;
export const Figcaption = styled.figcaption`
  background-color: #090909;

  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  // visibility: hidden;
  opacity: 0;
  // transition: 0.5s forwards;
  // transform-origin: 100%;
  transition: all 0.8s forwards;

  /* &:hover {
    opacity: 1;
    /* box-shadow: inset 0 -40em 0 0 rgb(224, 164, 43, 0.7);  
    */
    background: linear-gradient(
      to top,
      rgb(70, 37, 35),
      rgb(138, 110, 47),
      rgb(159, 121, 40),
      rgb(224, 164, 43, 0.6),
      rgb(246, 226, 122, 0.6)
    ); */
  }

  h3 {
    /* position: absolute; */
    /* z-index: 100; */
  }

  p {
    position: absolute;
    top: -4rem;
    right: 0;
    font-size: 12rem;
    /* text-align: right; */
    font-weight: 500;
    /* margin-top: 0; */
    /* z-index: 100; */
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  display: flex;
  align-self: center;
  justify-content: center;
  z-index: 2;
  /* opacity: 0; */
  transition: all 0.5s ease-out 0.3s;

  &:hover {
    opacity: 1;
  }

  span {
    position: absolute;
    bottom: -4rem;
    /* left: 0; */
    width: 10rem;
    flex-direction: row;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;

    /* align-items: center; */

    :hover {
      opacity: 1;
    }
  }
  /* display: flex;
  margin-bottom: 1.5rem; */
`;
export const ButtonW = styled.a`
  display: flex;
  align-items: center;
  color: #eaeaea;
`;
export const ButtonG = styled(ButtonW)``;
