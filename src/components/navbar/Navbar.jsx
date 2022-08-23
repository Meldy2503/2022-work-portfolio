import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import { ClickAwayListener } from "@material-ui/core";
import { Link } from "react-scroll";
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
    window.scrollY >= 5 ? setNavbar(true) : setNavbar(false);
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
              <Link
                className="link"
                to="landing-page"
                smooth={true}
                duration={100}
                activeClass="activeLink"
                spy={true}
              >
                Home
              </Link>
            </LinkLists>
            <LinkLists onClick={closeMenuLink}>
              <Link
                to="about-me"
                activeClassName="activeLink"
                className="link"
                smooth={true}
                duration={100}
                activeClass="activeLink"
                spy={true}
              >
                About Me
              </Link>
            </LinkLists>
            <LinkLists onClick={closeMenuLink}>
              <Link
                to="skills"
                activeClassName="activeLink"
                className="link"
                smooth={true}
                duration={100}
                activeClass="activeLink"
                spy={true}
              >
                Tech Stack
              </Link>
            </LinkLists>
            <LinkLists onClick={closeMenuLink}>
              <Link
                to="projects"
                activeClassName="activeLink"
                className="link"
                smooth={true}
                duration={100}
                activeClass="activeLink"
                spy={true}
              >
                Projects
              </Link>
            </LinkLists>
            <LinkLists onClick={closeMenuLink}>
              <Link
                to="contact"
                activeClassName="activeLink"
                className="link"
                smooth={true}
                duration={100}
                activeClass="activeLink"
                spy={true}
              >
                Contact Me
              </Link>
            </LinkLists>
          </LinkContainer>
          <MenuIcon onClick={handleMenuIcon}>
            <Hamburger
              rounded
              color="#fff"
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
