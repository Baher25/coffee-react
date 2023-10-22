import React from "react";
import "../about/About.css";
import aboutImg from "../../assets/about-img.jpg";
import { FiCheck } from "react-icons/fi";
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about--grid container grid">
        <div className="about--img-wrapper">
          <img src={aboutImg} alt="" className="about--img" />
        </div>
        <div className="about--content">
          <h2 className="section--title" data-title="About Us">
            Fresh Quality And Organic Tasty Coffee House For you
          </h2>
          <p className="about--description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority hava suffered alteration in some form, by injected
            humour , or randomised words which don't look even slightly
            believable.
          </p>

          <div className="about--details grid">
            <p className="about--details-description">
              <FiCheck  />
              At vero eos et accusamus et iusto odio
            </p>

            <p className="about--details-description">
              <FiCheck  />
              Established fact that a reader will be distracted
            </p>

            <p className="about--details-description">
              <FiCheck  />
              sed ut perspiciatis unde omnis iste natus sit
            </p>
          </div>
          <a href="#team" className="btn">
            Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
