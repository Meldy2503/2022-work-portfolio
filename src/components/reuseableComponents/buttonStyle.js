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
`;
