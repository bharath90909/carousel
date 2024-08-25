import React from "react";
import Slider from "react-slick";
import { users } from "../utils/userData";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/carousel.css";

export default function Carousel() {
  const settings = {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 550,
    infinite: true,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h1>Our Testimonials</h1>
      <p>Here's what our clients say about us</p>
      <Slider {...settings}>
        {/*  Generating cards */}
        {users.map((user, index) => (
          <Card user={user} key={index} />
        ))}
      </Slider>
    </div>
  );
}
