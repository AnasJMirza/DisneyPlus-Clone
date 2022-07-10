import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PicSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
        <Slider {...settings}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </Slider>
    </div>
  );
};

export default PicSlider;
