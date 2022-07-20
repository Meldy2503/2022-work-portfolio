import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;
  height: 7rem;
  box-shadow: 0.1rem 0.2rem 0.5rem #090909;
  background-color: #000;
  color: #000;

  ${(props) => props.navbar} {
    background-color: transparent;
    border-bottom: 0.2rem solid rgba(241, 241, 241, 0.2);
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
  width: 5rem;
  border: 0.1rem solid #e0a42b;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0.6rem 0.6rem 0 #e0a42b;

  a {
    font-size: 2.5rem;
    color: #e0a42b;
    font-weight: 700;
  }
`;

export const LinkContainer = styled.ul`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    background-color: #1c1c1c;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 7rem;
    display: block;
    z-index: 5000;
    height: 100vh;
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
  padding-left: 4rem;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding-left: 0;
  }
`;
export const Link = styled.a`
  color: #d0d0d0;
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
    background-color: #e0a42b;
    width: 70%;
    border-radius: 3rem;
    transform-origin: right;
    transform: scale(0, 1);
    transition: transform ease-in 290ms;
  }
  &:hover::before {
    transform: scale(1, 1);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -0.7rem;
    display: block;
    height: 0.29rem;
    background-color: #e0a42b;
    width: 70%;
    border-radius: 3rem;
    transform: scale(0, 1);
    transition: transform ease-out 290ms;
    transform-origin: left;
  }
  &:hover::after {
    transform: scale(1, 1);
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: 2rem 0rem 1rem 0rem;
    border-bottom: 0.1rem solid rgba(241, 241, 241, 0.2);
    text-align: center;
    color: #eaeaea;

    &::after {
      height: 0;
      width: 0;
    }
    &::before {
      height: 0;
      width: 0;
    }

    &:hover {
      color: #e0a42b;
    }
  }
`;
export const MenuIcon = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: block;
  }
`;
