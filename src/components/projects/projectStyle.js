import styled from "styled-components";
export const Container = styled.section`
  width: 100%;
  overflow: hidden;
  background-color: #1c1c1c;
  position: relative;
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
  margin-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  /* height: 35rem; */
  width: 32%;
  padding: 3rem;
  background-color: #090909;
  margin-bottom: 3rem;
  /* margin: 0 auto 1.3rem auto; */
  /* display: flex; */

  /* @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 49%;
  }

  @media (max-width: 650px) {
    width: 70%;
  }
  @media (max-width: 450px) {
    width: 95%;
  } */
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
`;

export const ButtonW = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  color: #fff;

  &:hover {
    /* box-shadow: 13rem 0 0 0 rgba(30, 67, 86) inset; */
    color: #fff;
  }
`;
export const ButtonG = styled(ButtonW)`
  background-color: rgba(30, 67, 86);
  color: #fff;

  &:hover {
    /* box-shadow: 13rem 0 0 0 #f3f3f3 inset; */
    color: rgba(30, 67, 86);
  }
`;
