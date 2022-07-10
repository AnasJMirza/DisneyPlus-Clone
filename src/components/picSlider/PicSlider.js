import React from "react";
import "./PicSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import slider1 from "../../assets/images/slider-badag.jpg";
import slider2 from "../../assets/images/slider-badging.jpg";
import slider3 from "../../assets/images/slider-scale.jpg";
import slider4 from "../../assets/images/slider-scales.jpg";
import usePicSlider from "./usePicSlider";

const PicSlider = () => {

    const { settings } = usePicSlider();

  return (
    <Slider {...settings} className="slider">
      <div className="slider-image-wrapper">
        <img src={slider1} alt="" className="slider-image" />
      </div>

      <div className="slider-image-wrapper">
        <img src={slider2} alt=""  className="slider-image"/>
      </div>

      <div className="slider-image-wrapper">
        <img src={slider3} alt="" className="slider-image" />
      </div>

      <div className="slider-image-wrapper">
        <img src={slider4} alt="" className="slider-image" />
      </div>
    </Slider>
  );
};

export default PicSlider;
