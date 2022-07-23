import styled from "styled-components";

export const SubHeading = styled.h2`
  font-size: 3rem;
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
  padding-bottom: 1.3rem;
  color: #d0d0d0;
  font-family: "Noto Sans", sans-serif;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 2.5rem;
  }

  &::before {
    content: "";
    height: 0.5rem;
    width: ${({ width }) => width || "60%"};
    background-color: ${({ theme }) => theme.color.primary};
    opacity: 0.8;
    position: absolute;
    bottom: 0;
    border-radius: 0.5rem;
  }
`;
