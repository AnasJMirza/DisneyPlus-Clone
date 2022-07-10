import React from 'react';

const usePicSlider = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        adaptiveHeight: true,
      };

    return {
        settings
    }
};

export default usePicSlider;