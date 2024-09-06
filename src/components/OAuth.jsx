import React from 'react'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase.js'
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, SignInFailure } from "../store/pages/userSlice.js";
import { useNavigate } from 'react-router-dom';
import { BASEURL } from '../data/dataApi.jsx';

export default function OAuth() {
    const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
  
      const result = await signInWithPopup(auth, provider);
  
      const res = await fetch(`${BASEURL}/api/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
  
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        console.log("Popup closed by user before completing sign in.");
      } else if (error.code === "auth/cancelled-popup-request") {
        console.log("Another popup request was made before completing the previous one.");
      } else if (error.code === "auth/unauthorized-domain") {
        console.log("Unauthorized domain error. Check Firebase configuration.");
      } else {
        console.log("An unexpected error occurred:", error);
      }
    }
  };
  
  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>continue with google</button>
  )
}
