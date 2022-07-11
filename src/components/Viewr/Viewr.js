import React from 'react';
import './Viewr.css'

import viewr1 from '../../assets/images/viewers-disney.png'
import viewr2 from '../../assets/images/viewers-marvel.png'
import viewr3 from '../../assets/images/viewers-national.png'
import viewr4 from '../../assets/images/viewers-pixar.png'
import viewr5 from '../../assets/images/viewers-starwars.png'

import video1 from '../../assets/videos/1564674844-disney.mp4'
import video2 from '../../assets/videos/1564676115-marvel.mp4'
import video3 from '../../assets/videos/1564676296-national-geographic.mp4'
import video4 from '../../assets/videos/1564676714-pixar.mp4'
import video5 from '../../assets/videos/1608229455-star-wars.mp4'

const Viewr = () => {
    return (
        <div className='viewr-body'>
            <div className='viewr-image-wrapper'>
                <img src={viewr1} alt='viewr-image' className='viewr-image' />
                <video autoPlay loop playsInline muted className='viewr-video'>
                    <source src={video1} type='video/mp4' /> 
                </video>
            </div>
            <div className='viewr-image-wrapper'>
                <img src={viewr2} alt='viewr-image' className='viewr-image' />
                <video autoPlay loop playsInline muted className='viewr-video'>
                    <source src={video2} type='video/mp4' /> 
                </video>
            </div>
            <div className='viewr-image-wrapper'>
                <img src={viewr3} alt='viewr-image' className='viewr-image' />
                <video autoPlay loop playsInline muted className='viewr-video'>
                    <source src={video3} type='video/mp4' /> 
                </video>
            </div>
            <div className='viewr-image-wrapper'>
                <img src={viewr4} alt='viewr-image' className='viewr-image' />
                <video autoPlay loop playsInline muted className='viewr-video'>
                    <source src={video4} type='video/mp4' /> 
                </video>
            </div>
            <div className='viewr-image-wrapper'>
                <img src={viewr5} alt='viewr-image' className='viewr-image' />
                <video autoPlay loop playsInline muted className='viewr-video'>
                    <source src={video5} type='video/mp4' /> 
                </video>
            </div>
        </div>
    );
};

export default Viewr;