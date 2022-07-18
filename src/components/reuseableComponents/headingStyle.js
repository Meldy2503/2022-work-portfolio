import styled from "styled-components";

export const SubHeading = styled.h2`
  font-size: 3rem;
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
  padding-bottom: 1.3rem;
  color: #eaeaea;
  font-family: "Noto Sans", sans-serif;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 2.5rem;
  }

  &::before {
    content: "";
    height: 0.5rem;
    width: ${({ width }) => width || "60%"};
    background-color: #ad974f;
    position: absolute;
    bottom: 0;
    border-radius: 0.5rem;
  }
`;
