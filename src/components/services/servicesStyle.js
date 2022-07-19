import styled from "styled-components";
// import bg1 from "../../assests/img002.jpg";

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  background-color: #090909;
  color: #d0d0d0;
`;
export const Contents = styled.div`
  width: 90%;
  max-width: 120rem;
  margin: 10rem auto;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 95%;
    margin: 6rem auto;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 8rem;
`;

export const Card = styled.div`
  width: 31.5%;
  padding: 6rem 4rem;
  margin: 0 auto 6rem auto;
  border: 0.2rem dotted #8e793e;
  position: relative;
  border-top-right-radius: 5rem;

  &:hover {
    color: #000;
    background-color: #ad974f;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 45%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }

  & > div {
    text-align: center;
    font-size: 2rem;

    span {
      font-size: 5rem;
      background-color: #ad974f;
      /* display: inline-flex; */
      width: fit-content;
      /* border-radius: 50%; */
      padding: 0.5rem 2.5rem;
      color: #090909;
      position: absolute;
      top: -3rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      border-radius: 1rem;
      box-shadow: 0.1rem 0.1rem 0.3rem 0.1rem #090909;

      /* &:hover {
        color: black;
      } */
    }

    h4 {
      margin: 1.5rem 0 0.7rem 0;
      font-size: 2rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: 400;
    }
  }
`;
