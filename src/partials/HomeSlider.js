import React from 'react';
import slider from '../slide.json';
import Carousel from 'react-bootstrap/Carousel';
import "../assets/css/HomeSlider.css"

const HomeSlider = () => {
  
  return (
    <div className="spotlight">
     <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://1.bp.blogspot.com/-43GuZ_dL9V4/XEeDMGrQmxI/AAAAAAAABF4/1zlO1Uc8WqUaaBFH-WwRjG3hgGDtpXzhgCKgBGAs/w0/hi-tech-interface-54-4k.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://1.bp.blogspot.com/-43GuZ_dL9V4/XEeDMGrQmxI/AAAAAAAABF4/1zlO1Uc8WqUaaBFH-WwRjG3hgGDtpXzhgCKgBGAs/w0/hi-tech-interface-54-4k.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://1.bp.blogspot.com/-43GuZ_dL9V4/XEeDMGrQmxI/AAAAAAAABF4/1zlO1Uc8WqUaaBFH-WwRjG3hgGDtpXzhgCKgBGAs/w0/hi-tech-interface-54-4k.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default HomeSlider
