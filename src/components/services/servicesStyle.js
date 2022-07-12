import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  background-color: #f3f3f3;
  color: #444;
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

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5rem;

  div {
    width: 31%;
    background-color: #fff;
    padding: 4rem 3rem;
    text-align: center;
    font-size: 2rem;
    margin: 0 auto 2rem auto;
    transition: all 0.5s;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      width: 45%;
    }
    @media (max-width: 500px) {
      width: 90%;
    }

    span {
      font-size: 5rem;
      background-color: #f3f3f3;
      border-radius: 50%;
      padding: 1rem 1.5rem 0 1.5rem;
      color: #48758d;
    }

    h4 {
      margin: 1.5rem 0 0.5rem 0;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;
