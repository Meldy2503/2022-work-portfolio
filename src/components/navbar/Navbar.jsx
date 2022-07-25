import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import { ClickAwayListener } from "@material-ui/core";
import { NavHashLink as NavLink } from "react-router-hash-link";
import {
  Header,
  NavContainer,
  Logo,
  LinkContainer,
  LinkLists,
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
            <NavLink to="#landing-page">EO</NavLink>
          </Logo>
          <LinkContainer isMenuOpen={isMenuOpen}>
            <LinkLists onClick={closeMenuLink}>
              <NavLink
                activeClassName="activeLink"
                className="link"
                to="/#landing-page"
                smooth
              >
                Home
              </NavLink>
            </LinkLists>
            <LinkLists onClick={closeMenuLink}>
              <NavLink
                activeClassName="activeLink"
                className="link"
                to="/#about-me"
                smooth
              >
                About Me
              </NavLink>
            </LinkLists>
            <LinkLists onClick={closeMenuLink}>
              <NavLink
                activeClassName="activeLink"
                className="link"
                to="/#skills"
                smooth
              >
                Tech Stack
              </NavLink>
            </LinkLists>
            <LinkLists onClick={closeMenuLink}>
              <NavLink
                activeClassName="activeLink"
                className="link"
                to="/#projects"
                smooth
              >
                Projects
              </NavLink>
            </LinkLists>
            <LinkLists onClick={closeMenuLink}>
              <NavLink
                activeClassName="activeLink"
                className="link"
                to="/#contact"
                smooth
              >
                Contact Me
              </NavLink>
            </LinkLists>
          </LinkContainer>
          <MenuIcon onClick={handleMenuIcon}>
            <Hamburger
              rounded
              color="#d0d0d0"
              size={25}
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
