import styled from "styled-components";

export const Container = styled.section`
  background-color: rgb(0, 0, 0, 0.9);
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
  margin: 0 auto 6rem auto;
  border: 0.3rem dotted #474747;
  position: relative;
  border-top-right-radius: 5rem;

  &:hover {
    border: 0.2rem dotted #c7b663;
    transform: scale(0.9);
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
      font-size: 5rem;
      background: linear-gradient(
        to right,
        #462523 0%,
        #8a6e2f 5%,
        #9f7928 10%,
        #c79834 22%,
        #c7b663 45%,
        #cebe6e 50%,
        #c7b663 55%,
        #c79834 78%,
        #9f7928 90%,
        #8a6e2f 95%,
        #462523 100%
      );
      opacity: 0.95;
      width: fit-content;
      padding: 0.5rem 2rem;
      color: #090909;
      position: absolute;
      top: -3rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      border-radius: 1rem;
      box-shadow: 0.1rem 0.1rem 0.3rem 0.1rem #090909;
    }

    h4 {
      margin: 2.5rem 0 0.7rem 0;
      font-size: 2rem;
    }

    p {
      font-weight: 400;
      line-height: 1.5;
    }
  }
`;
