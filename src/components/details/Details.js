import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import db from '../../config/Firebase';
import './Details.css'

import playIconBlack from '../../assets/images/play-icon-black.png'
import playIconWhite from '../../assets/images/play-icon-white.png'

const Details = () => {

     

    const { id } = useParams();
    const [details, setDetails] = useState({})
    const docRef = doc(db, "movies", id);

    useEffect(() => {
      
        const fetchData = async () => {
            
            const docSnap = await getDoc(docRef);
            setDetails(docSnap.data())
        }
        fetchData()
    
      
    }, [])
    

    return (
        <div className='details-body'>
            <div className='details-BG'>
                <img src={details.backgroundImg} alt={details.title} className='details-BGImage'/>
            </div>
            <div className='details-titleImg-wrapper'>
                <img src={details.titleImg} alt='' className='details-titleImg' />
            </div>

            <div className='content-body'>
                <div className='details-buttons'>
                    <div className='player'>
                        <img src={playIconBlack} alt="" />
                        <span>Play</span>
                    </div>

                    <div className='trailer'>
                        <img src={playIconWhite} alt="" />
                        <span>Trailer</span>
                    </div>
                </div>
                <div className='details-subTitle'>
                    {details.subTitle}
                </div>
                <div className='details-description'>
                    {details.description}
                </div>
            </div>
        </div>
    );
};

export default Details;