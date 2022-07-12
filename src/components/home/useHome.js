import React from 'react';
import { useDispatch } from 'react-redux';
import { selectUserName } from '../../features/auth/userSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import db from '../../config/Firebase';
import { getDocs, collection,  } from 'firebase/firestore';
import { setMovies } from '../../features/movie/movieSlice';

const useHome = () => {

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


            dispatch(setMovies({
                recomend: recomended,
                new: newDisney,
                orignal: orignals,
                trend: trending
            }))
            
          });
        };
    
        fetchMoviesData();
        console.log("user effect");
    
        
    
      }, [userName]);


    return {
        
    }
};

export default useHome;