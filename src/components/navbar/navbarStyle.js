import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;
  height: 7rem;
  background: rgba(30, 67, 86, 0.95);
  color: #fff;

  ${(props) => props.navbar} {
    background-color: transparent;
    /* border-bottom: 0.1rem solid rgba(241, 241, 241, 0.2); */
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.3rem 0;
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    align-items: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 95%;
  }
`;
export const Logo = styled.div`
  height: 4rem;
  width: 4.2rem;
  border: 0.1rem solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 0 #eee;

  a {
    font-size: 2.5rem;
    color: #fff;
    font-weight: 700;
  }
`;

export const LinkContainer = styled.ul`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    background-color: #48758d;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 7rem;
    display: block;
    z-index: 5000;
    height: 100vh;

    color: blue;
  }

  ${(props) => props.isMenuOpen} {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      display: none;
    }
  }
`;
export const LinkLists = styled.li`
  color: black;
  padding-left: 4rem;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding-left: 0;
  }
`;
export const Link = styled.a`
  color: #fff;
  position: relative;
  display: block;
  text-transform: uppercase;
  font-weight: 500;

  &::before {
    content: "";
    position: absolute;
    top: -0.5rem;
    right: 0;
    height: 0.29rem;
    background-color: #68a4c4;
    width: 70%;
    border-radius: 3rem;
    transform-origin: right;
    transform: scale(0, 1);
    transition: transform ease-in 250ms;
  }
  &:hover::before {
    transform: scale(1, 1);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -0.7rem;
    display: block;
    height: 0.2rem;
    background-color: #fff;
    width: 70%;
    border-radius: 3rem;
    transform: scale(0, 1);
    transition: transform ease-out 250ms;
    transform-origin: left;
  }
  &:hover::after {
    transform: scale(1, 1);
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: 2rem 0rem 1rem 0rem;
    border-bottom: 0.1rem solid rgba(241, 241, 241, 0.3);
    text-align: center;
    color: #fff;

    &::after {
      height: 0;
      width: 0;
    }
    &::before {
      height: 0;
      width: 0;
    }

    &:hover {
      color: rgba(30, 67, 86);
    }
  }
`;
export const MenuIcon = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: block;
  }
`;
