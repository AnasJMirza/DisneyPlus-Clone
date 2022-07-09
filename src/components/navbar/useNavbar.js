import React from "react";
import { useEffect } from "react";
import { auth, provider } from "../../config/Firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import {
  selectUserName,
  selectUserEmail,
  selectUserphoto,
  setUserLoginDetails,
  setLogoutState
} from "../../features/auth/userSlice";


const useNavbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserphoto);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
        if(user) {
            setUser(user)
            navigate('/home')
        }

    })
  }, [userName])
  

  const handleAuth = async () => {
    if(!userName) {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result.user.photoURL);
            setUser(result.user)
          } catch (error) {
            console.log(error.message);
          }
    } else if (userName){
        try {
            await signOut(auth);
            dispatch(setLogoutState())
            navigate('/')
        } catch (error) {
            console.log(error.message);
        }
    }
    
  };

  const setUser = (user) => {
    dispatch(
        setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
  }

  return {
    handleAuth,
    userName,
    userPhoto
  };
};

export default useNavbar;
