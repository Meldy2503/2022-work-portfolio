import styled from "styled-components";
export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  background-color: #f3f3f3;
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
  height: 43rem;
  width: 31.5%;
  margin: 0 auto 2.5rem auto;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 47%;
  }

  @media (max-width: 650px) {
    width: 70%;
  }
  @media (max-width: 420px) {
    width: 95%;
  }

  .card_side {
    height: 43rem;
    width: 100%;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    border-radius: 0.5rem;
    overflow: hidden;
    /* box-shadow: 0rem 0.1rem 0.3rem #999; */

    &--front {
      background-color: #fff;
    }
    &--back {
      background-color: #fff;
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

// export const Img = styled.img`
//   background: linear-gradient(
//       359.8deg,
//       #47425d 0.12%,
//       rgba(52, 168, 83, 0) 99.77%
//     ),
//     url(${project.img});
// `;

export const FrontText = styled.div`
  margin: 0 auto;
  text-align: center;

  figure {
    display: block;
    height: 43rem;
    position: relative;
  }

  img {
    /* filter: brightness(70%) contrast(100%); */
    width: 100%;
    height: 100%;
  }

  figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.3) 100.12%,
      rgba(52, 168, 83, 0) 0.77%
    );
    /* background: linear-gradient(
      to top,
      rgba(30, 67, 86, 0.7) 65.12%,
      rgba(52, 168, 83, 0) 95.77%
    ); */
    /* background-image: linear-gradient(
      348.37deg,
      #5239fa 17.97%,
      rgba(255, 255, 255, 0) 79.2%
    ); */

    height: 100%;
    width: 100%;
  }

  h3 {
    font-size: 2.5rem;
    margin: 3rem 0 0 0;
    font-weight: 700;
    color: #fff;
    z-index: 100;
  }
`;
export const BackText = styled.div`
  color: #444;
  padding: 3rem 1.5rem;

  p {
    line-height: 1.5;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ButtonW = styled.a`
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  margin-top: 4rem;
  background-color: #f3f3f3;
  color: rgba(30, 67, 86);
  transition: all 0.7s;

  &:hover {
    box-shadow: 13rem 0 0 0 rgba(30, 67, 86) inset;
    color: #fff;
  }
`;
export const ButtonG = styled(ButtonW)`
  background-color: rgba(30, 67, 86);
  color: #fff;

  &:hover {
    box-shadow: 13rem 0 0 0 #f3f3f3 inset;
    color: rgba(30, 67, 86);
  }
`;
