import styled from "styled-components";

export const Button = styled.a`
  padding: ${({ pad }) => pad || "1.5rem 3.5rem"};
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: ${({ mgt }) => mgt || "4rem"};
  font-family: "Montserrat", sans-serif;
  transition: all 0.7s;
  width: ${({ width }) => width || "fit-content"};
  margin-right: ${({ mgr }) => mgr || "0"};
  background-color: ${({ theme }) => theme.color.primary};
  color: #000;

  @media (max-width: 450px) {
    margin-right: ${({ mgsr }) => mgsr || "0"};
    margin-top: ${({ mgst }) => mgst || "2rem"};
  }

  &:hover {
    box-shadow: -23rem 0 0 0 inset #fff;
  }
`;

export const ButtonB = styled.button`
  padding: 1.5rem 4rem;
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  color: #000;
  background: linear-gradient(
    to right,
    rgb(70, 37, 35) 0%,
    rgb(138, 110, 47) 5%,
    rgb(159, 121, 40) 10%,
    rgb(199, 152, 52) 22%,
    rgb(199, 182, 99) 45%,
    rgb(206, 190, 110) 50%,
    rgb(199, 182, 99) 55%,
    rgb(199, 152, 52) 78%,
    rgb(159, 121, 40) 90%,
    rgb(138, 110, 47) 95%,
    rgb(70, 37, 35) 100%
  );
  cursor: pointer;
  margin-top: 2rem;
  border: none;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  transition: ease-out 0.8s;

  &:hover {
    background: linear-gradient(
      to right,
      #474747 0%,
      #999 5%,
      #bdbaba 10%,
      #d0d0d0 22%,
      #eaeaea 45%,
      #eaeaea 50%,
      #eaeaea 55%,
      #d0d0d0 78%,
      #bdbaba 90%,
      #999 95%,
      #474747 100%
    );
    color: #9b7628;
  }
`;

export const ButtonC = styled(Button)`
  color: #000;
  background: linear-gradient(
    to right,
    rgb(70, 37, 35) 0%,
    rgb(138, 110, 47) 5%,
    rgb(159, 121, 40) 10%,
    rgb(199, 152, 52) 22%,
    rgb(199, 182, 99) 45%,
    rgb(206, 190, 110) 50%,
    rgb(199, 182, 99) 55%,
    rgb(199, 152, 52) 78%,
    rgb(159, 121, 40) 90%,
    rgb(138, 110, 47) 95%,
    rgb(70, 37, 35) 100%
  );

  &:hover {
    background: linear-gradient(
      to right,
      #474747 0%,
      #999 5%,
      #bdbaba 10%,
      #d0d0d0 22%,
      #eaeaea 45%,
      #eaeaea 50%,
      #eaeaea 55%,
      #d0d0d0 78%,
      #bdbaba 90%,
      #999 95%,
      #474747 100%
    );
    color: #9b7628;
  }
`;
