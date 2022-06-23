import styled from "styled-components";
import bg1 from "../../assests/computer5.jpg";
export const Container = styled.section`
  overflow: hidden;
  position: relative;
  width: 100%;
  background: linear-gradient(
      to right,
      rgba(30, 67, 86, 0.85),
      rgba(30, 67, 86, 0.9)
    ),
    url(${bg1});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const Contents = styled.div`
  width: 90%;
  max-width: 120rem;
  margin: 10rem auto;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 95%;
    margin: 6rem auto;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
  }
`;
export const Col1 = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin: 2rem 0 5rem 0;
    width: 100%;
  }
`;

export const MediaContents = styled.div`
  margin-top: 6rem;
`;
export const Media = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
  color: #000;
  width: inherit;
  border-bottom: 0.5rem solid #68a4c4;

  p,
  a {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.4;
    color: #fff;
    letter-spacing: 0.1rem;
    padding-bottom: 0.7rem;
  }

  .icons {
    font-size: 2.3rem;
    margin-right: 1rem;
    color: #fff;
  }
`;

export const Col2 = styled.div`
  width: 56%;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
  }
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: rgba(255, 255, 255);
  padding: 5rem 2rem;

  div {
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 2rem;
    padding: 1.5rem;
    font-size: 1.6rem;
    background-color: rgba(255, 255, 255);
    border: 0.2rem solid #e7e4e4;
    color: #00102e;
    outline: none;
    user-select: none;
    box-shadow: 0.3rem 0.5rem 1rem #b8b4b4;
    border-radius: 1.5rem;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px rgba(255, 255, 255) inset !important;
      -webkit-box-shadow: 0 0 0 30px rgba(255, 255, 255) inset !important;
      -webkit-text-fill-color: #00102e !important;
    }

    &::placeholder {
      color: #444444;
    }

    &:focus {
      border-bottom: 0.2rem solid rgba(30, 67, 86, 0.8);
    }
  }
`;
