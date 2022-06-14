import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 1, 0.93);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9000;
`;

export const PopMessage = styled.div`
  width: 28rem;
  height: 28rem;
  border-radius: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border: 0.1rem solid #47425d;
  box-shadow: 0.1rem 0.1rem 0.5rem 0.4rem #000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 1rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 26rem;
    height: 26rem;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      max-width: 100%;
      width: 48%;
      position: absolute;
      top: -5rem;
      filter: drop-shadow(3px 4px 4px black) brightness(80%) contrast(180%)
        saturate(0);

      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        width: 48%;
      }
    }

    p {
      margin-top: 5rem;
      font-weight: 700;
      line-height: 1.5;
      color: #00102e;
      text-transform: uppercase;
    }
  }
`;
