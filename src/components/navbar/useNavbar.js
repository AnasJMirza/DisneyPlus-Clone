import { async } from '@firebase/util';
import React from 'react';
import { auth, provider } from '../../config/Firebase';
import { signInWithPopup } from 'firebase/auth'

const useNavbar = () => {

    const handleAuth = async () => {
        try {
            
            const result = await signInWithPopup(auth, provider)
            console.log(result);

        } catch (error) {
            console.log(error.message);
        }
    }

    return {
        handleAuth
    }
};

export default useNavbar;