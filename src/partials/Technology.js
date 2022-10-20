import React from 'react'
import { Container} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Technology.css";


const Technology = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <section id="team" className="team">
        <Container data-aos="fade-up">
            <div className="section-header">
                <h2>Our Team</h2>
                <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
            </div>
            <div ClassName="tech-slide">
            <Slider {...settings} >
        
           <div className="img-wrapper">
           <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"/>
          </div>
          <div  className="img-wrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"/>
          </div>
          <div  className="img-wrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"/>
          </div>
          <div  className="img-wrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"/>
          </div>
          <div  className="img-wrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"/>
          </div>
          <div  className="img-wrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"/>
          </div>
          
        </Slider>
        </div>
        </Container>
    </section>
  )
}

export default Technology
