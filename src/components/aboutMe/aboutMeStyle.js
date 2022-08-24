import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  background: linear-gradient(to right, #343337, #222222);
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
  margin: 5rem auto;
  position: relative;
  padding: 4rem;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 2.5rem;
  }

  @media (max-width: 500px) {
    padding: 4rem 1rem;
  }

  h3 {
    font-size: 2rem;
    margin: 1rem 0 0 0;
    color: #fff;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    padding: 0rem 0 3rem 0;
    margin: 0 auto;
  }

  div {
    position: relative;
    width: 35rem;
    height: 40rem;
    margin: 0 auto;
    border: 0.6rem solid #333;
    background-color: #090909;

    @media (max-width: 500px) {
      height: 28rem;
      border: none;
    }

    img {
      max-width: 100%;
      width: 35rem;
      height: 38rem;
      object-fit: contain;
      position: absolute;
      bottom: 3rem;
      left: 3rem;
      background: linear-gradient(
        to right,
        #474747 0%,
        #999 5%,
        #bdbaba 10%,
        #d0d0d0 22%,
        #eaeaea 45%,
        #eaeaea 50%,
        #eaeaea 55%,
        #d0d0d0 78%,
        #bdbaba 90%,
        #999 95%,
        #474747 100%
      );

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
    margin-bottom: 0.5rem;
    color: #eaeaea;
    opacity: 0.9;
  }
`;

export const Interests = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
  }
  @media (max-width: 500px) {
    margin: 1rem auto;
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
      background-color: rgb(255, 255, 255, 0.007);
      padding: 1rem 1rem 0 1rem;
      font-size: 2.5rem;
      border-radius: 0.6rem;
    }

    p {
      font-size: 1.6rem;
      margin-top: 0.5rem;
      color: #d0d0d0;
    }
  }
`;

export const Cv = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin: 3rem 0;
    display: block;
    a {
      padding: 1.5rem 3rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.color.primary};
      color: #000;

      &:hover {
        box-shadow: -23rem 0 0 0 inset #fff;
      }
    }
  }
`;
