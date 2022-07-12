import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMoviesNull } from '../../features/movie/movieSlice';
import './MovieGrid.css'

const MovieGrid = (props) => {

    let movies = props.data;

    return (
        <div>
            <div>
                <h3 style={{marginLeft: '2.8vw'}}>{props.heading}</h3>
            </div>
            <div className='movieGrid-body'>
                {/* <div className='movieGrid-card-wrapper'>
                    <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg' alt='' className='movieGrid-card-image' />
                </div> */}
                {movies?.map((item, key) => {
                    return <div className='movieGrid-card-wrapper' key={key}>
                        <Link to={`/details/` + item.id}>
                            <img src={item.cardImg} alt='img' className='movieGrid-card-image' />
                        </Link>
                    </div>
                })}
            </div>
        </div>
    );
};

export default MovieGrid;