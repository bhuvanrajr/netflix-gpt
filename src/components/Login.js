import React, { useRef, useState } from 'react'
import { Validations } from '../utils/Validations';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase';

//import { useNavigate } from 'react-router';
import Header from './Header';
import Background from './Background';

const Login = () => {
 const[isSignIn, setIsSignIn] = useState(true);
 const [errorMessage, setErrorMessage] = useState(null);
 //const navigate = useNavigate();
 const eml = useRef(null);
 const pwd = useRef(null);
 const UpdateSignInStatus = () =>
 {
    setIsSignIn(!isSignIn);
 }

 const SignInUser = () =>{
    //console.log(pwd.current.value)
    const validation = Validations(eml.current.value, pwd.current.value);
    if(validation!= null)
        setErrorMessage(validation);

    if(!isSignIn)
    {
        //console.log("Iam in!")
        createUserWithEmailAndPassword(auth, eml.current.value, pwd.current.value)
        .then((userCredential) => {
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
            // ..
        });
    }
    else
    {
        signInWithEmailAndPassword(auth, eml.current.value, pwd.current.value)
        .then((userCredential) => {
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + "-" + errorMessage);
        });
    }
}

  return (
    <>
        <Header />
        <Background />
        <div className='mx-96 my-40 w-1/3 h-2/3 absolute bg-black rounded-md opacity-80'>
            <form onSubmit={(e) =>{e.preventDefault();}}>
                <h1 className='p-4 mx-16 text-2xl text-white font-extrabold'>{isSignIn ? "Sign in" : "Sign up"}</h1>
                <input ref={eml} type = "text"
                    className='p-4 mx-16 my-2 w-72 rounded-md bg-black text-white font-medium border' 
                    placeholder='Email or mobile number' />
                <input ref={pwd} type = "password"
                    className='p-4 mx-16 my-2 w-72 rounded-md  bg-black text-white font-medium border' 
                    placeholder='Password' />
                <button className='h-10 mx-16 my-4 w-72 rounded-md bg-red-700 text-white font-bold'
                    onClick={SignInUser}>{isSignIn? "Sign in" : "Sign up"}</button>
                <p className='h-10 mx-16 my-4 w-72 text-red-700 font-medium'>{errorMessage}</p>
            </form>
            {isSignIn ? 
            (<p className='p-4 mx-16 text-white font-semibold'>
                New to Netflix? <span className='underline cursor-pointer' onClick={UpdateSignInStatus}>Sign up now. </span>
            </p>)
            :
            (<p className='p-4 mx-16 text-white font-semibold'>
                Already a member? <span className='underline cursor-pointer' onClick={UpdateSignInStatus}>Please Sign in. </span>
            </p>)
            }  
        </div>
    </>
  )
}

export default Login
