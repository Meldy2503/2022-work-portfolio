import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  background-color: #fff;
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
  box-shadow: 0 0.2rem 0.9rem 0.6rem rgba(0, 0, 0, 0.05);
  display: flex;
  margin: 5rem auto;
  position: relative;
  justify-content: space-between;
  color: #444;
  padding: 4rem;
  align-items: center;
  background-color: rgba(30, 67, 86, 0.95);

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 500px) {
    padding: 2rem;
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
    width: 34rem;
    height: 34rem;
    margin: 0 auto;
    background-color: #48758d;

    @media (max-width: 500px) {
      height: 28rem;
    }

    img {
      max-width: 100%;
      width: 34rem;
      height: 34rem;
      position: absolute;
      bottom: 2.5rem;
      left: 2.5rem;
      border: 0.01rem solid #c4c4c4;

      @media (max-width: 500px) {
        bottom: 0;
        left: 0;
        border: 1.5rem solid #48758d;
        height: 28rem;
      }
    }
  }
`;

export const TextContainer = styled.div`
  width: 55%;
  background-color: #fff;
  padding: 3rem;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
  }
  @media (max-width: 500px) {
    padding: 3rem 2rem;
  }

  p {
    line-height: 1.4;
    font-size: 1.8rem;
    color: #444;
  }
`;

export const Interests = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 2.5rem;
  font-size: 1.8rem;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: rgba(30, 67, 86);
  }
`;

export const Col1 = styled.div`
  margin-bottom: 2.5rem;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
    margin: 0 auto;
  }
`;
export const Col2 = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
    margin: 2.5rem auto;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    margin-right: 4rem;
    color: #48758d;
  }
`;

export const Cv = styled.div`
  .icon {
    margin-left: 1rem;
  }
`;
