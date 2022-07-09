import { async } from '@firebase/util';
import React from 'react';
import { auth, provider } from '../../config/Firebase';
import { signInWithPopup } from 'firebase/auth'

import { selectUserName, selectUserEmail, selectUserphoto, setUserLoginDetails } from '../../features/auth/userSlice'
import { useDispatch, useSelector } from 'react-redux';


const useNavbar = () => {

    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const userEmail = useSelector(selectUserEmail)
    const userPhoto = useSelector(selectUserphoto)

    const handleAuth = async () => {
        try {
            
            const result = await signInWithPopup(auth, provider)
            dispatch(setUserLoginDetails({
                name: result.user.name,
                email: result.user.email,
                photo: result.user.photoURL,
            }))

        } catch (error) {
            console.log(error.message);
        }
    }

    return {
        handleAuth
    }
};

export default useNavbar;