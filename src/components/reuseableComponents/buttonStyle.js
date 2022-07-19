import styled from "styled-components";

export const Button = styled.a`
  padding: ${({ pad }) => pad || "1.8rem 4rem"};
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin-top: ${({ mgt }) => mgt || "4rem"};
  font-family: "Montserrat", sans-serif;
  transition: all 0.7s;
  width: ${({ width }) => width || "fit-content"};
  color: ${({ co }) => co || "#eaeaea"};
  background-color: ${({ bgc }) => bgc || "transparent"};
  margin-right: ${({ mgr }) => mgr || "0"};
  border: ${({ bor }) => bor || "none"};

  @media (max-width: 450px) {
    margin-right: ${({ mgsr }) => mgsr || "0"};
    margin-top: ${({ mgst }) => mgst || "2rem"};
  }

  &:hover {
    box-shadow: ${({ bxs }) =>
      bxs || "0 8rem 0 0 #eaeaea inset, 0 -8rem 0 0 #eaeaea inset"};
    color: ${({ coh }) => coh || "#444"};
    border: ${({ borh }) => borh || "none"};
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
  background-color: #8e793e;
  cursor: pointer;
  margin-top: 2rem;
  border: none;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  transition: ease-out 0.8s;

  &:hover {
    box-shadow: 0 8rem 0 0 #ad974f inset, 0 -8rem 0 0 #ad974f inset;
  }
`;
