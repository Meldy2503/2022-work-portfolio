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
  color: #090909;
  margin-right: ${({ mgr }) => mgr || "0"};
  background: linear-gradient(
    to right,
    #462523 0%,
    #8a6e2f 5%,
    #9f7928 10%,
    #c79834 22%,
    #c7b663 45%,
    #cebe6e 50%,
    #c7b663 55%,
    #c79834 78%,
    #9f7928 90%,
    #8a6e2f 95%,
    #462523 100%
  );

  @media (max-width: 450px) {
    margin-right: ${({ mgsr }) => mgsr || "0"};
    margin-top: ${({ mgst }) => mgst || "2rem"};
  }

  &:hover {
    background: linear-gradient(
      to right,
      #474747 0%,
      #777 5%,
      #999 10%,
      #bdbaba 22%,
      #c4c4c4 45%,
      #d0d0d0 50%,
      #c4c4c4 55%,
      #bdbaba 78%,
      #999 90%,
      #777 95%,
      #474747 100%
    );
  }
`;

export const ButtonB = styled.button`
  padding: 1.5rem 4rem;
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  color: #090909;
  background: linear-gradient(
    to right,
    #462523 0%,
    #8a6e2f 5%,
    #9f7928 10%,
    #c79834 22%,
    #c7b663 45%,
    #cebe6e 50%,
    #c7b663 55%,
    #c79834 78%,
    #9f7928 90%,
    #8a6e2f 95%,
    #462523 100%
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
      #777 5%,
      #999 10%,
      #bdbaba 22%,
      #c4c4c4 45%,
      #d0d0d0 50%,
      #c4c4c4 55%,
      #bdbaba 78%,
      #999 90%,
      #777 95%,
      #474747 100%
    );
  }
`;
