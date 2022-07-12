import React from 'react';
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
                {movies?.map((item) => {
                    return <div className='movieGrid-card-wrapper'>
                        <img src={item.cardImg} alt='img' className='movieGrid-card-image' />
                    </div>
                })}
            </div>
        </div>
    );
};

export default MovieGrid;