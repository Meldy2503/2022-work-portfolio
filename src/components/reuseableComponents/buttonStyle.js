import styled from "styled-components";

export const Button = styled.a`
  padding: 1.7rem 4rem;
  font-weight: 400;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  background-color: ${({ bgc }) => bgc || "#e64e4e"};
  cursor: pointer;
  margin-top: ${({ mgt }) => mgt || "4rem"};
  width: ${({ width }) => width || "fit-content"};
  font-family: "Montserrat", sans-serif;
  transition: all 0.8s;
  border: 0.2rem solid #eee;

  &:hover {
    box-shadow: -28rem 0 0 0 #e64e4e inset;
    border: 0.2rem solid #e64e4e;
  }
`;

export const ButtonB = styled.button`
  padding: 1.5rem 4rem;
  font-weight: 400;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  background-color: #e64e4e;
  cursor: pointer;
  margin-top: 4rem;
  border: none;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  transition: ease-out 0.8s;

  &:hover {
    box-shadow: 0 8rem 0 0 #47425d inset, 0 -8rem 0 0 #47425d inset;
  }
`;
