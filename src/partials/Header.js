import { React, useState, useEffect } from "react";
import { nav_links } from "../Utils/Constants";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../assets/css/Header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={scroll ? "header sticked" : "header"}
      >
        <Container>
          <Navbar.Brand className="logo">
            {" "}
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto app__navbar-links">
              {nav_links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <NavLink to={url} className="nav_links">
                      {" "}
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </Nav>
            <div className="profile-dropdown">
            <Nav >
              <Nav.Link>
                <NavDropdown title="Profile" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Sign Up
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
            </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
