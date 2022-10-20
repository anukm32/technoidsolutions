import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import "../assets/css/Footer.css";
import { NavLink, Link } from "react-router-dom";
import { nav_links } from "../Utils/Constants";
import logo from "../assets/images/logo.png";


const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <Container>
          <Row className="gy-4">
            <Col lg={5} md={12} className="footer-info">
              <Link to="/">
                <img src={logo} alt="logo" style={{ width: "128px" }} />
              </Link>
             

              <div className="social-links d-flex mt-4">
                <a href="#" className="twitter">
                  <BsTwitter />
                </a>
                <a href="#" className="facebook">
                  <BsFacebook />
                </a>
                <a href="#" className="instagram">
                  <BsInstagram />
                </a>
                <a href="#" className="linkedin">
                  <BsLinkedin />
                </a>
              </div>
            </Col>
            <Col lg={2} md={6} className="footer-links">
              <h4>Quick Links</h4>
              <ul>
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
              </ul>
            </Col>

            <Col
              lg={3}
              md={12}
              className="footer-contact text-center text-md-start"
            >
              <h4>Address</h4>
              <p>
                Office no. 111, Techno hub Building 1, <br />
                DTEC, Dubai Silicon Oasis
                <br />
                <br />
                <strong>Phone off:</strong> 04 393 6278
                <br />
                <strong> Mob:</strong> +971 50 934 3483
                <br/>
                <strong>Email:</strong> info@technoid.com
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="mt-4">
          <div className="copyright">
            &copy; {new Date().getFullYear()}
            <strong>
              Technoid<span>Solutions</span>
            </strong>
            . All Rights Reserved
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
