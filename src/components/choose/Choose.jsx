import React from "react";
import "../choose/Choose.css";
import chooseImg from "../../assets/choose.jpg";
import coffeeMug from "../../assets/coffee-mug.svg";
import coffeeBeans2 from "../../assets/coffee-beans-2.svg";
import coffeeBeans3 from "../../assets/coffee-beans-3.svg";

function Choose() {
  return (
    <section className="choose section">
      <div className="choose--grid container grid">
        <div className="choose--content">
          <h2 className="section--title" data-title="Why choose Us">
            Coffero Most Our Of Your Fvourite & Tasty Coffee House
          </h2>
          <p className="chosse--description">
            There are many variations of passages of orem psum available but the
            majority hava suffered alteration in some form by injected humour or
            randomised words which don't look even slightly believable
          </p>

          <div className="choose--details grid">
            <div className="choose--details-item">
              <div className="choose--details-img-wrapper">
                <img src={coffeeMug} alt="" className="choose-details-img" />
              </div>
              <div>
                <h3 className="choose--details-title">
                  Awesome Aroma
                </h3>
                <p className="choose--details-description">
                  There are many variations of passages of Lorem ipsum availble
                  but the majority have suffered alteration in some injected
                </p>
              </div>
            </div>
          </div>

          
          <div className="choose--details grid">
            <div className="choose--details-item">
              <div className="choose--details-img-wrapper">
                <img src={coffeeBeans2} alt="" className="choose-details-img" />
              </div>
              <div>
                <h3 className="choose--details-title">
                  pure Grades
                </h3>
                <p className="choose--details-description">
                  There are many variations of passages of Lorem ipsum availble
                  but the majority have suffered alteration in some injected
                </p>
              </div>
            </div>
          </div>

          
          <div className="choose--details grid">
            <div className="choose--details-item">
              <div className="choose--details-img-wrapper">
                <img src={coffeeBeans3} alt="" className="choose-details-img" />
              </div>
              <div>
                <h3 className="choose--details-title">
                  Healthy Coffee
                </h3>
                <p className="choose--details-description">
                  There are many variations of passages of Lorem ipsum availble
                  but the majority have suffered alteration in some injected
                </p>
              </div>
            </div>
          </div>

        </div>
        <img src={chooseImg} alt="" className="choose--img" />
      </div>
    </section>
  );
}

export default Choose;
