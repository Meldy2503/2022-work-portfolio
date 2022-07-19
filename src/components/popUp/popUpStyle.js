import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 1, 0.9);
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
  height: 29rem;
  border-radius: 2rem;
  background-color: #1c1c1c;
  border: 0.1rem solid #000;
  box-shadow: 0.1rem 0.1rem 0.5rem 0.4rem #000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 1rem 1rem 3rem 1rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 27rem;
    height: 28rem;
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
      filter: drop-shadow(0.1rem 0.1rem 0.25rem #1c1c1c) brightness(100%)
        contrast(80%) saturate(1);
    }

    p {
      margin-top: 9rem;
      font-weight: 700;
      line-height: 1.5;
      color: #fff;
      text-transform: uppercase;
    }
  }
`;
