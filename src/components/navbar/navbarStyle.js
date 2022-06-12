import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;
  height: 7rem;
  background: #080808;
  margin-bottom: 500rem;
  color: #fff;
  box-shadow: 0.1rem 0.2rem 0.2rem #000;

  ${(props) => props.navbar} {
    background-color: transparent;
    border-bottom: 0.1rem solid rgba(241, 241, 241, 0.2);
    box-shadow: 0.1rem 0.2rem 0.2rem #000;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  width: 90%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    align-items: flex-start;
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
    background-color: #080000;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 7rem;
    display: block;
    z-index: 5000;
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
`;
export const Link = styled.a`
  padding-left: 4rem;
  color: #fff;
  position: relative;
  display: block;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: 3rem 2rem 1.5rem 2rem;
    border-bottom: 0.1rem solid #252525;
    text-align: center;
  }

  &:hover {
    padding-bottom: 0.3rem;

    &::before {
      content: "";
      height: 0.2rem;
      width: 40%;
      background-color: #fff;
      position: absolute;
      bottom: 0;
    }
  }
`;
export const MenuIcon = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: block;
  }
`;
