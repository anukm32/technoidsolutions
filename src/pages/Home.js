import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../assets/css/Home.css";
import about_img from "../assets/images/about.jpg";
import ContactForm from "../partials/ContactForm";
import HomeSlider from "../partials/HomeSlider";
import OurBlog from "../partials/OurBlog";
import Technology from "../partials/Technology";


const Home = () => {
  
  return (
    <>
    <HomeSlider/>
      <section id="about" className="about">
        <Container data-aos="fade-up">
          <div className="section-header">
            <h2>About Us</h2>
            <p>
              Aperiam dolorum et et wuia molestias qui eveniet numquam nihil
              porro incidunt dolores placeat sunt id nobis omnis tiledo stran
              delop
            </p>
          </div>

          <Row className="gy-4">
            <Col lg={6}>
              <h3>Lorem ipsum dolor sit amet</h3>
              <img
                src={about_img}
                className="img-fluid rounded-4 mb-4"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor..
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
            <Col lg={6}>
              <div className="content ps-0 ps-lg-5">
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident
                </p>

               
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <OurBlog/>
      <Technology/>
      <ContactForm/>
      
    </>
  );
};

export default Home;
