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
  height: 3.5rem;
  width: 4rem;
  border: 0.1rem solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0.6rem 0.6rem 0 #d0d0d0;

  a {
    font-size: 1.8rem;
    color: #fff;
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
    animation: slidein 0.6s linear;

    @keyframes slidein {
      0% {
        transform: scale(0);
        opacity: 0.25;
      }
      25% {
        transform: scale(0.25);
        opacity: 0.45;
      }
      50% {
        transform: scale(0.5);
        opacity: 0.65;
      }
      75% {
        transform: scale(0.8);
        opacity: 0.85;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
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

  .link {
    color: #fff;
    display: block;
    font-weight: 500;
    font-size: 1.7rem;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      padding: 4rem 0rem 1rem 0rem;
      border-bottom: 0.1rem solid rgba(241, 241, 241, 0.2);
      text-align: center;
      color: #fff;
    }
  }

  .activeLink,
  .link:hover {
    color: #fff;
    position: relative;
    display: block;
    font-weight: 500;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.4rem;
      display: block;
      height: 0.2rem;
      background-color: #fff;
      width: 100%;
      border-radius: 3rem;
      transform: scale(1, 1);
      transform-origin: center;
      transition: transform 0.5s linear;
    }

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      padding: 4rem 0rem 1rem 0rem;
      border-bottom: 0.1rem solid rgba(241, 241, 241, 0.2);
      text-align: center;
      color: ${({ theme }) => theme.color.primary};

      &::after {
        content: "";
        height: 0;
        width: 0;
      }
    }
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: block;
  }
`;

export const Cv = styled.div`
  margin-left: 2.3rem;
  a {
    color: #fff;
    padding: 0.7rem 1.8rem;
    border: 0.2rem solid ${({ theme }) => theme.color.primary};
    border-radius: 0.5rem;
    font-size: 1.7rem;

    &:hover {
      color: #000;
      background-color: ${({ theme }) => theme.color.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: none;
  }
`;
