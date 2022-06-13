import styled from "styled-components";

export const SubHeading = styled.h2`
  font-size: 3rem;
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
  padding-bottom: 0.6rem;
  color: ${({ color }) => color || "#fff"};
  font-family: "Noto Sans", sans-serif;
  /* font-family: "Ubuntu", sans-serif; */

  &::before {
    content: "";
    height: 0.3rem;
    width: 60%;
    background-color: #a02f2f;
    position: absolute;
    bottom: 0;
  }
`;
