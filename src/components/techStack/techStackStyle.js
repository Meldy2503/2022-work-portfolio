import styled from "styled-components";
import bg from "../../assests/bgbody.jpeg";

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  background-image: linear-gradient(
      to right,
      rgba(9, 4, 32, 0.9),
      rgba(9, 4, 32, 0.9)
    ),
    url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
export const Contents = styled.div`
  width: 90%;
  margin: 10rem auto;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 95%;
    margin: 6rem auto;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
  }
`;
export const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 95%;
  }
`;
export const Tools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 500;
    padding-bottom: 0.5rem;
    position: relative;
    margin-bottom: 1.5rem;

    &::before {
      content: "";
      height: 0.3rem;
      width: 60%;
      background-color: #fff;
      position: absolute;
      bottom: 0;
      border-radius: 0.5rem;
    }
  }
`;
export const Skills = styled(Tools)`
  margin-bottom: 5rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  figure {
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      width: 12rem;
    }
  }

  img {
    max-width: 100%;
    height: 7rem;
    width: 8rem;
  }

  figcaption {
    margin-top: 1rem;
    color: #c4c4c4;
  }
`;

export const Col2 = styled.div`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 80%;
    margin-top: 5rem;
  }
  @media (max-width: 600px) {
    width: 100%;
  }

  img {
    max-width: 100%;
  }
`;
