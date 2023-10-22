import React from "react";
import "../Testimonials/Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { testimonials } from "../../Data";
import { FaStar } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";

function Testimonials() {
  return (
    <section className="testimonials container section">
      <h2 className="section--title" data-title="testimonials">
        What Client Say's
      </h2>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
    
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
      >
        {testimonials.map(({ img, title, service, description }, index) => {
          return (
            <SwiperSlide className="testimonial--item" key={index}>
              <div className="testimonial--qoute">
                <p className="testimonial--description">{description}</p>
                <VscTriangleDown className="testimonial--icon" />
              </div>

              <div className="testimonial--content">
                <div className="testimonial--img-wrapper">
                  <img src={img} alt="" className="testimonial--img" />
                </div>

                <div>
                  <h3 className="testimonial--title">{title} </h3>
                  <p className="testimonial--service">{service} </p>
                </div>
                
                <div className="testimonial--rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
