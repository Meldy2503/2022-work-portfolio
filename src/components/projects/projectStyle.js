import styled from "styled-components";
export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  background-color: #fff;
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

export const Row = styled.div`
  margin-top: 4rem;
  width: 100%;
`;
export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 45rem;
  width: 32%;
  margin: 0 auto 2.5rem auto;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 48%;
  }

  @media (max-width: 650px) {
    width: 75%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }

  .card_side {
    height: 45rem;
    width: 100%;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0rem 0.1rem 0.3rem #999;

    &--front {
      background-color: #f7f7f7;
    }
    &--back {
      background-color: #f7f7f7;
      transform: rotateY(180deg);
      position: relative;
    }
  }

  &:hover .card_side--front {
    transform: rotateY(-180deg);
  }

  &:hover .card_side--back {
    transform: rotateY(0);
  }
`;

export const FrontText = styled.div`
  margin: 0 auto;
  text-align: center;

  div {
    box-shadow: 0rem 0.3rem 0.3rem #000;
    height: 30rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  h3 {
    font-size: 2.5rem;
    margin: 2rem 0 1rem 0;
    font-weight: 700;
    color: #47425d;
  }

  p {
    margin: 0 auto;
    padding: 0 2rem 2rem 2rem;
    word-spacing: 0.5rem;
    font-size: 1.7rem;
  }
`;
export const BackText = styled.div`
  color: #00102e;

  p,
  div {
    padding: 0 2rem;
  }

  p {
    line-height: 1.5;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const BackTextHeading = styled.h3`
  width: 100%;
  font-size: 2.3rem;
  background-color: ${({ bg }) => bg || "#47425d"};
  height: 10rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eee;
`;
