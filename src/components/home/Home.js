import React from 'react';
import './Home.css'

import PicSlider from '../picSlider/PicSlider';
import Viewr from '../Viewr/Viewr';

import viewr1 from '../../assets/images/viewers-disney.png'
import viewr2 from '../../assets/images/viewers-marvel.png'
import viewr3 from '../../assets/images/viewers-national.png'
import viewr4 from '../../assets/images/viewers-pixar.png'
import viewr5 from '../../assets/images/viewers-starwars.png'
import AllMovies from '../allMovies/AllMovies';



const Home = () => {
    return (
        <div className='home-body'>
            <PicSlider />
            <Viewr />
            <AllMovies />
        </div>
    );
};

export default Home;