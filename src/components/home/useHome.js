import React from 'react';
import { useEffect } from 'react';
import { selectUserName } from '../../features/auth/userSlice';
import db from '../../config/Firebase';
import { collection, doc, getDocs } from "firebase/firestore";

const useHome = () => {

    useEffect(() => {
        const docRef = collection(db )
    
      
    }, [selectUserName])
    


    return {

    }
};

export default useHome;