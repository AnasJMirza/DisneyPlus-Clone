import React from 'react';
import './Home.css'

import PicSlider from '../picSlider/PicSlider';
import Viewr from '../Viewr/Viewr';
import MovieGrid from '../movieGrid/MovieGrid';

import viewr1 from '../../assets/images/viewers-disney.png'
import viewr2 from '../../assets/images/viewers-marvel.png'
import viewr3 from '../../assets/images/viewers-national.png'
import viewr4 from '../../assets/images/viewers-pixar.png'
import viewr5 from '../../assets/images/viewers-starwars.png'



import { useEffect } from "react";
import { selectUserName } from "../../features/auth/userSlice";
import db from "../../config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../features/movie/movieSlice";
import { selectRecomended, selectNewDisney, selectOrignals, selectTrending } from '../../features/movie/movieSlice';




const Home = () => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName)

    let moviesData = "";
    let recomended = [];
    let newDisney = [];
    let orignals = [];
    let trending = [];

    useEffect(() => {
        const fetchMoviesData = async () => {
            
          moviesData = await getDocs(collection(db, 'movies'));
          moviesData.forEach((doc) => {
            
            switch (doc.data().type) {
                case 'recomended':
                    recomended = [...recomended, { id: doc.id, ...doc.data() }]
                    break;
                case 'newDisney':
                    newDisney = [...newDisney, { id: doc.id, ...doc.data() }]
                    break;
                case 'orignals':
                    orignals = [...orignals, { id: doc.id, ...doc.data() }]
                    break;
                case 'trending':
                    trending = [...trending, { id: doc.id, ...doc.data() }]
                    break;
            
                default:
                    break;
            }

            console.log(orignals, "orignals in array");


            dispatch(setMovies({
                recomend: recomended,
                new: newDisney,
                orignal: orignals,
                trend: trending
            }))
            
          });
        };
    
        fetchMoviesData();
    
        
    
      }, [userName]);

      
        const recomendedMovies = useSelector(selectRecomended)
        const newDisneyMovies = useSelector(selectNewDisney)
        const orignalsMovies = useSelector(selectOrignals)
        console.log(orignalsMovies, "orignals");
        const trendingMovies = useSelector(selectTrending)
        

    return (
        <div className='home-body'>
            <PicSlider />
            <Viewr />
            <MovieGrid heading="Recommended for you" data={recomendedMovies} />
            <MovieGrid heading="new Disney+" data={newDisneyMovies} />
            <MovieGrid heading="Orignals" data={orignalsMovies} />
            <MovieGrid heading="Trending" data={trendingMovies} />
        </div>
    );
};

export default Home;