import styled from "styled-components";

export const Button = styled.a`
  padding: 1.8rem 4rem;
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin-top: 4rem;
  font-family: "Montserrat", sans-serif;
  transition: all 0.7s;
  width: ${({ width }) => width || "fit-content"};
  color: ${({ co }) => co || "#fff"};
  background-color: ${({ bgc }) => bgc || "#fff"};
  margin-right: ${({ mgr }) => mgr || "0"};

  @media (max-width: 450px) {
    margin-right: ${({ mgsr }) => mgsr || "0"};
    margin-top: ${({ mgst }) => mgst || "2rem"};
  }

  &:hover {
    box-shadow: ${({ bxs }) =>
      bxs || "0 8rem 0 0 #fff inset, 0 -8rem 0 0 #fff inset"};
    color: ${({ coh }) => coh || "#444"};
  }
`;

export const ButtonB = styled.button`
  padding: 1.5rem 4rem;
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  background-color: #5688a3;
  cursor: pointer;
  margin-top: 2rem;
  border: none;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  transition: ease-out 0.8s;

  &:hover {
    box-shadow: 0 8rem 0 0 rgba(30, 67, 86, 0.8) inset,
      0 -8rem 0 0 rgba(30, 67, 86, 0.8) inset;
  }
`;
