import styled from "styled-components";
// import bg1 from "../../assests/img002.jpg";

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  background-color: #090909;

  /* background-color: rgb(5, 9, 29); */
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

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

export const Card = styled.div`
  width: 31%;
  background-color: #fff;
  padding: 5rem 3.5rem;
  margin: 0 auto 2rem auto;

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
      background-color: #f3f3f3;
      border-radius: 50%;
      padding: 1rem 1.5rem 0 1.5rem;
      color: rgb(6, 11, 35, 9);
    }

    h4 {
      margin: 1.5rem 0 0.5rem 0;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;
