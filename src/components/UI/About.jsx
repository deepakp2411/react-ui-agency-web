import React from "react";
import "../../styles/about.css";
import aboutImg from '../../images/about-us.jpg'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Why Choose us</h6>
            <h2>Specialist in avoiding clients on</h2>
            <h2 className="highlight">financial challenges</h2>
            <p className="description about__content-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              quidem aspernatur delectus amet adipisci officiis a accusamus
              dolore harum velit illum impedit asperiores temporibus expedita
              iste vitae, culpa deserunt provident!
            </p>

            <div className="choose__us-item">
              <span className="choose__us-icon">
                <i class="ri-wifi-line"></i>
              </span>
              <div>
                <h4 className="choose__us-title">First working process</h4>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus assumenda a perspiciatis?
                </p>
              </div>
            </div>
            <div className="choose__us-item">
              <span className="choose__us-icon">
              <i class="ri-customer-service-fill"></i>
              </span>
              <div>
                <h4 className="choose__us-title">24/7</h4>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus assumenda a perspiciatis?
                </p>
              </div>
            </div>
            <div className="choose__us-item">
              <span className="choose__us-icon">
                <i class="ri-wifi-line"></i>
              </span>
              <div>
                <h4 className="choose__us-title">First working process</h4>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus assumenda a perspiciatis?
                </p>
              </div>
            </div>


          </div>
  

        <div className="about__img">
          <img src={aboutImg} alt="aboutimg" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
