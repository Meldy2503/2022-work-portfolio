import styled from "styled-components";
import bg1 from "../../assests/img003.jpg";

export const Container = styled.section`
  overflow: hidden;
  position: relative;
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.75)),
    url(${bg1});

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
export const Contents = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 10rem auto;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 95%;
    margin: 6rem auto;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Tools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;

  h3 {
    color: #eaeaea;
    font-size: 2.5rem;
    font-weight: 500;
    padding-bottom: 0.9rem;
    position: relative;
    margin-bottom: 2rem;

    @media (max-width: 350px) {
      font-size: 2.2rem;
    }

    &::before {
      content: "";
      height: 0.35rem;
      width: 100%;
      background-color: #e0a42b;
      position: absolute;
      bottom: 0;
      border-radius: 0.5rem;
      transform: scaleX(0.4);
    }
  }
`;
export const Languages = styled(Tools)``;
export const Frameworks = styled(Tools)``;

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
    border: 0.2rem solid #d0d0d0;
    border-radius: 2rem;
    padding: 1rem;
    width: 12rem;
    margin-right: 1rem;

    &:hover {
      border: 0.2rem solid #e0a42b;
    }
  }

  img {
    max-width: 100%;
    height: 7rem;
    width: 8rem;
    padding-bottom: 1rem;
    border-bottom: 0.2rem solid #d0d0d0;
    filter: brightness(100%) contrast(140%) saturate(1);

    &:hover {
      border-bottom: 0.2rem solid #e0a42b;
    }
  }

  figcaption {
    margin-top: 0.5rem;
    color: #eaeaea;
  }
`;
