import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  background-color: #1c1c1c;
  color: black;
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
export const Row = styled.section`
  background-color: rgb(0, 0, 0, 0.9);
  box-shadow: 0 0.1rem 0.3rem 0.4rem #000;
  margin: 5rem auto;
  position: relative;
  padding: 4rem;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.5rem;
  }

  @media (max-width: 500px) {
    padding: 1rem;
  }

  h3 {
    font-size: 2rem;
    margin: 2rem 0 0.5rem 0;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
    padding: 4rem;
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    padding: 4rem 0;
  }

  div {
    position: relative;
    width: 35rem;
    height: 34rem;
    margin: 0 auto;
    border-left: 0.6rem solid ${({ theme }) => theme.color.primary};
    border-bottom: 0.6rem solid ${({ theme }) => theme.color.primary};
    border-top: 0.6rem solid #000;
    border-right: 0.6rem solid #000;
    background-color: #090909;
    @media (max-width: 500px) {
      height: 28rem;
      border: none;
    }

    img {
      max-width: 100%;
      width: 35rem;
      height: 34rem;
      position: absolute;
      bottom: 2.2rem;
      left: 2.2rem;
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
      opacity: 0.9;
      @media (max-width: 500px) {
        bottom: 0;
        left: 0;
        border: none;
        height: 28rem;
      }
    }
  }
`;

export const TextContainer = styled.div`
  width: 55%;
  padding: 0 2rem 2rem 2rem;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
  }
  @media (max-width: 500px) {
    padding: 0rem 1rem;
  }

  p {
    line-height: 1.7;
    margin-bottom: 2.9rem;
    color: #999;
    opacity: 0.9;
    font-size: 1.7rem;
  }
`;

export const Cv = styled.div`
  .icon {
    margin-left: 1rem;
  }
`;

export const Interests = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0 0 0;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
    padding: 1rem 2rem;
  }
  @media (max-width: 500px) {
    margin: 1rem auto;
    padding: 1.5rem 1rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;

    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
      margin-right: 1rem;
      color: ${({ theme }) => theme.color.primary};
      background-color: #1c1c1c;
      padding: 1.5rem 3rem;
      font-size: 2.3rem;
    }

    p {
      font-size: 1.6rem;
      margin-top: 1rem;
      color: #bdbaba;
    }
  }
`;
