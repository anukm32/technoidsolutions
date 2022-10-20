import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'

import techimg from "../Utils/Techimg";
import {BsBroadcast, BsEasel, BsBoundingBoxCircles, BsCalendarWeek, BsChatSquareText, BsArrowRight} from 'react-icons/bs'


import "../assets/css/OurBlog.css";

const OurBlog = () => {
  return (
    <section id="services" className="services sections-bg">
    <Container data-aos="fade-up" data-aos-delay="100">
        <div className="section-header">
            <h2>Our <span>Blog</span></h2>
            <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
        </div>
        <Row className="gy-4" data-aos="fade-up" data-aos-delay="100">
            <Col lg={4} md={6}>
                <div className="service-item  position-relative">
                    <div className="icon">
                       
                        <img src={techimg.first}alt="firstblog"/>
                    </div>
                    <h3>How can a staffing solution company help you bussiness?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <a href="/#" className="readmore stretched-link">Read more <BsArrowRight className="icon-arrow-right"/></a>
                </div>
            </Col>  
            <Col lg={4} md={6}>
                <div className="service-item position-relative">
                    <div className="icon">
                    <img src={techimg.second}alt="secondblog"/>
                    </div>
                    <h3> Why staffing solution are crucial for bussiness excellence?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <a href="/#" className="readmore stretched-link">Read more <BsArrowRight className="icon-arrow-right"/></a>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <div className="service-item position-relative">
                    <div className="icon">
                    <img src={techimg.third}alt="thirdblog"/>
                    </div>
                    <h3>How most companies use Global It solution?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <a href="/#" className="readmore stretched-link">Read more <BsArrowRight className="icon-arrow-right"/></a>
                </div>
            </Col>
          
        </Row>
    </Container>
</section>
  )
}

export default OurBlog
