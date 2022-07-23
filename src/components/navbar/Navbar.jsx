import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import { ClickAwayListener } from "@material-ui/core";
import {
  Header,
  NavContainer,
  Logo,
  LinkContainer,
  LinkLists,
  Link,
  MenuIcon,
} from "./navbarStyle";

const Navbar = () => {
  const [navbar, setNavbar] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuIcon = () => setIsMenuOpen(!isMenuOpen);
  const closeMenuLink = () => setIsMenuOpen(false);
  const handleClickAway = () => setIsMenuOpen(false);

  const changeNavBgColorOnScroll = () => {
    window.scrollY >= 7 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeNavBgColorOnScroll);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Header navbar={navbar}>
        <NavContainer>
          <Logo>
            <a href="#landing-page">EO</a>
          </Logo>
          <LinkContainer isMenuOpen={isMenuOpen}>
            <LinkLists onClick={closeMenuLink}>
              <Link href="#landing-page">Home</Link>
            </LinkLists>
            <LinkLists onClick={closeMenuLink}>
              <Link href="#about-me">About Me</Link>
            </LinkLists>
            <LinkLists onClick={closeMenuLink}>
              <Link href="#skills">Tech Stack</Link>
            </LinkLists>
            <LinkLists onClick={closeMenuLink}>
              <Link href="#projects">Projects</Link>
            </LinkLists>
            <LinkLists onClick={closeMenuLink}>
              <Link href="#contact">Contact Me</Link>
            </LinkLists>
          </LinkContainer>
          <MenuIcon onClick={handleMenuIcon}>
            <Hamburger
              rounded
              color="#be8b23"
              size={30}
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
            />
          </MenuIcon>
        </NavContainer>
      </Header>
    </ClickAwayListener>
  );
};

export default Navbar;
