import styled from "styled-components";
import bg1 from "../../assests/img001.jpg";
export const Container = styled.section`
  overflow: hidden;
  position: relative;
  width: 100%;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.75)
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

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 95%;
    margin: 6rem auto;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6rem 0 0 10rem;
  width: 90%;
  background-color: #1c1c1c;
  position: relative;
  padding: 2rem;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin: 6rem 0 0 8rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    margin: 13rem auto 0 auto;
    padding: 0 0 2rem 0;
    width: 95%;
  }
`;
export const Col1 = styled.div`
  width: 41%;
  display: flex;
  flex-direction: column;
  margin-left: -11rem;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 43%;
    margin-left: -9rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin: -9rem auto 5rem auto;
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 95%;
  }
`;

export const MediaContents = styled.div`
  height: 93%;
  background: linear-gradient(
    to right,
    #462523 0%,
    #8a6e2f 5%,
    #9f7928 10%,
    #c79834 22%,
    #c7b663 45%,
    #cebe6e 50%,
    #c7b663 55%,
    #c79834 78%,
    #9f7928 90%,
    #8a6e2f 95%,
    #462523 100%
  );
  padding: 2.5rem 0 0 0;
  box-shadow: 0.3rem 0.3rem 0.4rem #000;
  display: flex;
  flex-direction: column;
  color: #000;

  h3 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 3rem;
  }
`;
export const Media = styled.div`
  margin-bottom: 8rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-bottom: 3rem;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: inherit;
    margin-bottom: 2rem;
  }

  p,
  a {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.4;
    color: #000;
    letter-spacing: 0.1rem;
    padding-bottom: 0.7rem;
    text-align: center;
  }

  .icons {
    font-size: 2.7rem;
    color: #000;
  }
`;

export const Connect = styled(Media)`
  text-align: center;

  .icons {
    margin-right: 1.6rem;
  }

  .last {
    margin-right: 0;
  }
`;

export const Col2 = styled.div`
  width: 67%;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
  }

  h3 {
    margin-top: 2rem;
    padding: 0 2rem;
    font-size: 2rem;
    color: #d0d0d0;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      margin-top: 0;
    }
  }
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  padding: 2rem;

  div {
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 2rem;
    padding: 1.5rem;
    font-size: 1.6rem;
    border: none;
    background-color: rgb(0, 0, 0, 0.4);
    color: #d0d0d0;
    outline: none;
    user-select: none;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px rgb(0, 0, 0, 0.924) inset !important;
      -webkit-box-shadow: 0 0 0 30px rgb(0, 0, 0, 0.924) inset !important;
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
