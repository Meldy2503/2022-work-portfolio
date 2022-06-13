import styled from "styled-components";
import bg2 from "../../assests/bgbody.jpeg";

export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  background-image: linear-gradient(
      to right,
      rgba(9, 4, 32, 0.9),
      rgba(9, 4, 32, 0.9)
    ),
    url(${bg2});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const Contents = styled.div`
  width: 90%;
  margin: 10rem auto;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin: 6rem auto;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
  }
`;
export const Col1 = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin: 2rem 0 5rem 0;
    width: 100%;
  }

  div {
    margin-top: 3rem;
  }
`;

export const Media = styled.div`
  display: flex;
  margin-bottom: 2rem;
  color: #c4c4c4;
  border-radius: 0.5rem;
  border-bottom: 0.6rem solid #e64e4e;

  p,
  a {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.4;
    color: #c4c4c4;
    letter-spacing: 0.1rem;
    width: 80%;
    padding-bottom: 0.6rem;
  }

  .icons {
    font-size: 2.3rem;
    margin-right: 1rem;
    color: #e64e4e;
  }
`;

export const Col2 = styled.div`
  width: 56%;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100%;
  }
`;
export const Form = styled.form`
  border: 0.2rem solid #c4c4c4;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 5rem 2rem;

  div {
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 2rem;
    padding: 1.6rem;
    font-size: 1.6rem;
    background-color: transparent;
    color: #00102e;
    outline: none;
    user-select: none;
    border: none;
    box-shadow: 0.2rem 0.2rem 0.1rem 0.3rem #c4c4c4;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px #fff inset !important;
      -webkit-box-shadow: 0 0 0 30px #fff inset !important;
      -webkit-text-fill-color: #00102e !important;
    }

    &::placeholder {
      color: #47425d;
    }

    &:focus {
      border-bottom: 0.2rem solid #47425d;
    }
  }
`;
