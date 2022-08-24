import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import { ClickAwayListener } from "@material-ui/core";
import { Link } from "react-scroll";
import myCv from "../../assests/Emelder-Okafor.pdf";
import {
  Header,
  NavContainer,
  Logo,
  LinkContainer,
  LinkLists,
  MenuIcon,
  Cv,
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
            <Link to="landing-page" ooth={true} duration={100} spy={true}>
              EO
            </Link>
          </Logo>
          <LinkContainer isMenuOpen={isMenuOpen}>
            <LinkLists>
              <Link
                className="link"
                to="landing-page"
                smooth={true}
                duration={100}
                activeClass="activeLink"
                spy={true}
                onClick={closeMenuLink}
              >
                Home
              </Link>
            </LinkLists>
            <LinkLists>
              <Link
                to="about-me"
                activeClassName="activeLink"
                className="link"
                smooth={true}
                duration={100}
                activeClass="activeLink"
                spy={true}
                onClick={closeMenuLink}
              >
                About Me
              </Link>
            </LinkLists>
            <LinkLists>
              <Link
                to="skills"
                activeClassName="activeLink"
                className="link"
                smooth={true}
                duration={100}
                activeClass="activeLink"
                spy={true}
                onClick={closeMenuLink}
              >
                Tech Stack
              </Link>
            </LinkLists>
            <LinkLists>
              <Link
                to="projects"
                activeClassName="activeLink"
                className="link"
                smooth={true}
                duration={100}
                activeClass="activeLink"
                spy={true}
                onClick={closeMenuLink}
              >
                Projects
              </Link>
            </LinkLists>
            <LinkLists>
              <Link
                to="contact"
                activeClassName="activeLink"
                className="link"
                smooth={true}
                duration={100}
                activeClass="activeLink"
                spy={true}
                onClick={closeMenuLink}
              >
                Contact Me
              </Link>
            </LinkLists>
            <Cv>
              <a href={myCv} target="_blank" rel="noreferrer">
                Resume
              </a>
            </Cv>
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
