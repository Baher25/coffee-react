import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import shapeThree from "../../assets/shape-3.png";
import "../Reservation/Reservation.css";

function Reservation() {
  return (
    <section className="reservation container" id="reservation">
      <h2 className="section--title" data-title="Reservation">
        Book A Table
      </h2>

      <form action="" className="reservation--form grid">
        <div className="form--input-div">
          <input type="text" placeholder="Your Name" className="form--input" />
        </div>

        <div className="form--input-div">
          <input
            type="email"
            placeholder="Your Email Address"
            className="form--input"
          />
        </div>

        <div className="form--input-div">
          <input
            type="number"
            placeholder="Your phone"
            className="form--input"
          />
        </div>

        <div className="form--input-div">
          <input
            type="text"
            placeholder="Date Ex: DD/MM/YY"
            className="form--input"
          />
        </div>

        <div className="form--input-div">
          <input
            type="text"
            placeholder="Time Ex:01:25PM"
            className="form--input"
          />
        </div>

        <div className="form--input-div">
          <input
            type="text"
            placeholder="Number of People"
            className="form--input"
          />
        </div>

        <div className="form--input-div form--input-textarea">
          <textarea
            placeholder="Your Message"
            className="form--input"
          ></textarea>
        </div>

        <button className="btn btn--flex reservation--btn">
          <FaRegBookmark/> Book A Table
        </button>
        <img src={shapeTwo} alt="" className="shape--two"/>
        <img src={shapeThree} alt="" className="shape--three"/>

      </form>
    </section>
  );
}

export default Reservation;
