import styled from "styled-components";

export const Container = styled.section`
  background-color: rgb(0, 0, 0);
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
  color: #999;
`;

export const Card = styled.div`
  width: 32%;
  padding: 4rem 2rem;
  margin: 0 auto 8rem auto;
  position: relative;
  border-top-right-radius: 5rem;
  background-color: rgb(255, 255, 255, 0.008);

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
      background-color: #000;
      width: fit-content;
      padding: 2rem;
      position: absolute;
      top: -3.5rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      border-radius: 50%;
      border: 0.15rem solid #d0d0d0;
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
