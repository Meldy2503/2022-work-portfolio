import styled from "styled-components";
import bg1 from "../../assests/bg2.jpg";

export const Container = styled.section`
  overflow: hidden;
  position: relative;
  width: 100%;
  background: url(${bg1});
  box-shadow: rgb(0 0 0 / 92%) 0px 100em 0px 0px inset;
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
    color: #fff;
    font-size: 2.2rem;
    font-weight: 500;
    padding-bottom: 0.9rem;
    position: relative;
    margin-bottom: 2rem;

    @media (max-width: 320px) {
      font-size: 2rem;
    }

    &::before {
      content: "";
      height: 0.35rem;
      width: 100%;
      background-color: ${({ theme }) => theme.color.primary};
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    text-align: center;
    border: 0.15rem solid #eaeaea;
    border-radius: 1rem;
    padding: 1rem;
    width: 12rem;
    margin-right: 1rem;

    &:hover {
      border: 0.15rem solid ${({ theme }) => theme.color.primary};
    }
  }

  img {
    max-width: 100%;
    height: 5rem;
    width: 7rem;
    padding-bottom: 0.7rem;
    border-bottom: 0.15rem solid #eaeaea;
    filter: brightness(100%) contrast(140%) saturate(1);

    &:hover {
      border-bottom: 0.15rem solid ${({ theme }) => theme.color.primary};
      filter: brightness(100%) contrast(110%) saturate(0);
    }
  }

  figcaption {
    margin-top: 0.5rem;
    color: #fff;
  }
`;
