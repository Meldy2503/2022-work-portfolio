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
  background-color: #090909;
  box-shadow: 0 0.1rem 0.4rem 0.3rem #000;
  /* display: flex; */
  margin: 5rem auto;
  position: relative;
  /* justify-content: space-between; */
  color: #eaeaea;
  padding: 4rem;
  /* align-items: center; */

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
    justify-content: center;
    padding: 2.5rem;
  }

  @media (max-width: 500px) {
    padding: 1.5rem;
  }

  h3 {
    font-size: 2rem;
    margin: 2rem 0 0.5rem 0;
    color: #ad974f;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  margin-top: 2.5rem;
  font-size: 1.8rem;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

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
    height: 35rem;
    margin: 0 auto;
    background-color: #8e793e;

    @media (max-width: 500px) {
      height: 28rem;
    }

    img {
      max-width: 100%;
      width: 35rem;
      height: 35rem;
      position: absolute;
      bottom: 2.5rem;
      left: 2.5rem;
      /* filter: saturate(0) contrast(100%) brightness(100%); */

      @media (max-width: 500px) {
        bottom: 0;
        left: 0;
        border: 2rem solid #8e793e;
        height: 30rem;
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
    line-height: 1.6;
    font-size: 1.8rem;
    /* color: #fff; */
  }
`;

export const Edu = styled.div`
  margin-bottom: 2.9rem;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
    margin: 3rem auto;
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

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
    padding: 0 2rem;
  }
  @media (max-width: 500px) {
    margin: 1rem auto;
    padding: 0rem 1rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;

    span {
      display: flex;
      // flex-direction: column;
      align-items: center;
      // justify-content: center;
      margin-bottom: 1rem;
      margin-right: 1rem;
      color: #ad974f;
      background-color: #1c1c1c;
      padding: 1.5rem 3rem;
      font-size: 2.5rem;
    }

    p {
      font-size: 1.7rem;
      margin-left: 1rem;
      color: #eaeaea;
    }
  }
`;
