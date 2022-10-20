import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../assets/css/ContactForm.css";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";

const ContactForm = () => {
  return (
    <>
      <section id="contact" className="contact">
        <Container data-aos="fade-up">
          <div className="section-header">
            <h2>Contact</h2>
            <p>
              Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam
              porro nihil id ratione ea sunt quis dolorem dolore earum
            </p>
          </div>

          <Row className="gx-lg-0 gy-4">
            <Col lg={4}>
              <div className="info-container d-flex flex-column align-items-center justify-content-center">
                <div className="info-item d-flex">
                  <HiOutlineLocationMarker className="contact-icon flex-shrink-0" />
                  <div>
                    <h4>Location:</h4>
                    Office no. 111, Techno hub Building 1, <br />
                    DTEC, Dubai Silicon Oasis
                  </div>
                </div>

                <div className="info-item d-flex">
                  <HiOutlineMail className="contact-icon flex-shrink-0" />
                  <div>
                    <h4>Email:</h4>
                    <p>info@technoid.com</p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <BsPhone className="contact-icon flex-shrink-0" />
                  <div>
                    <h4>Call:</h4>
                    <p>+971 50 934 3483</p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <BiTime className="contact-icon flex-shrink-0" />
                  <div>
                    <h4>Open Hours:</h4>
                    <p>Mon-Sat: 8AM - 5.30PM</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="7"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactForm;
