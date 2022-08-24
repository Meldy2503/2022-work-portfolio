import styled from "styled-components";

export const Container = styled.section`
  background-color: #090909;
  width: 100%;
  overflow: hidden;
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
  color: #eaeaea;
`;

export const Card = styled.div`
  width: 32%;
  padding: 4rem 2rem;
  margin: 0 auto 8rem auto;
  position: relative;
  transition: all 0.5s;

  &:hover {
    border-top-right-radius: 5rem;
    box-shadow: 0.1rem 0.1rem 0.5rem #343337;
    transform: translateY(-2px) scale(1.09);
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 47%;
  }
  @media (max-width: 600px) {
    width: 92%;
  }

  & > div {
    text-align: center;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 5rem;
      color: ${({ theme }) => theme.color.primary};
      background-color: #090909;
      width: fit-content;
      padding: 1.5rem;
      position: absolute;
      top: -2.5rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      border-radius: 50%;
      border: 0.2rem solid ${({ theme }) => theme.color.primary};
      transition: transform 0.5s ease-in-out;
    }

    span:hover {
      transform: rotate(360deg);
    }

    h4 {
      margin: 4rem 0 0.7rem 0;
      font-size: 2.1rem;
      color: #fff;
    }

    p {
      font-weight: 400;
      line-height: 1.5;
    }
  }
`;
