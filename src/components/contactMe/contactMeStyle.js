import styled from "styled-components";
import bg1 from "../../assests/bg3.jpg";

export const Container = styled.section`
  overflow: hidden;
  position: relative;
  width: 100%;
  background: url(${bg1});
  box-shadow: rgb(0 0 0 / 90%) 0px 100em 0px 0px inset;
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
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
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Col2 = styled.div`
  margin-top: 8rem;
  width: 100%;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #fff;
  }

  & > p {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const MediaContents = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 4rem auto 0 auto;
`;
export const Media = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.color.primary};
  border-radius: 1rem;
  width: 32%;
  color: #fff;
  margin: 0 auto 2rem auto;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 48%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 90%;
  }

  a {
    padding: 1rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
  }

  &:hover a:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: #000;
    border-radius: 1rem;
  }

  div {
    h3 {
      font-size: 1.7rem;
    }
    p {
      font-size: 1.4rem;
    }
  }

  .icons {
    font-size: 3.5rem;
    display: flex;
    align-items: center;
    align-self: center;
  }
`;

export const Col1 = styled.div`
  width: 70%;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const Title = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h3 {
    font-size: 1.9rem;
    color: #d0d0d0;
  }

  h1 {
    font-size: 5.5rem;
    color: #fff;
    letter-spacing: 0.3rem;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      font-size: 4.5rem;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      font-size: 3.5rem;
    }
  }
`;
export const Form = styled.form`
  background-color: #343337;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  padding: 3rem 2rem;

  div {
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 2rem;
    padding: 2rem;
    font-size: 1.6rem;
    border: none;
    background-color: #090909;
    color: #d0d0d0;
    outline: none;
    user-select: none;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px #090909 inset !important;
      -webkit-box-shadow: 0 0 0 30px #090909 inset !important;
      -webkit-text-fill-color: #d0d0d0 !important;
    }

    &::placeholder {
      color: #d0d0d0;
    }

    &:focus {
      box-shadow: 0.1rem 0.6rem 0.7rem #000;
    }
  }
`;
