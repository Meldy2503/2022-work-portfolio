import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  overflow: hidden;
  background: #000;
  font-weight: 500;
  padding: 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    line-height: 1.7;
  }

  span {
    color: ${({ theme }) => theme.color.primary};
  }
`;
