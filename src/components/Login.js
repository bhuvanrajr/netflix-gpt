import React, { useRef, useState } from 'react'
import { Validations } from '../utils/Validations';

const Login = () => {
 const[isSignIn, setIsSignIn] = useState(true);
 const [errorMessage, setErrorMessage] = useState(null);
 const eml = useRef(null);
 const pwd = useRef(null);
 const UpdateSignInStatus = () =>
 {
    setIsSignIn(!isSignIn);
 }

 const ValidateInputs = () =>{
    console.log(pwd.current.value)
    const validation = Validations(eml.current.value, pwd.current.value);
    if(validation!= null)
        setErrorMessage(validation);
 }

  return (
    <>
        <div className='w-40 h-20 z-40 rounded-lg bg-gradient-to-b from-black absolute' >
            <img alt='logo' src= "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
        </div>
        <div className='absolute'>
            <img alt ='bodyImage' src = "https://assets.nflxext.com/ffe/siteui/vlv3/d44b8e7c-e52b-45bc-9568-7d009f91c9ee/web/AU-en-20250929-TRIFECTA-perspective_a969e386-38ba-488c-a609-d010cb5d8dc1_medium.jpg" />
        </div>
        <div className='mx-96 my-40 w-1/3 h-2/3 absolute bg-black rounded-md opacity-80'>
            <form onSubmit={(e) =>{e.preventDefault();}}>
                <h1 className='p-4 mx-16 text-2xl text-white font-extrabold'>{isSignIn ? "Sign in" : "Sign up"}</h1>
                <input ref={eml} type = "text"
                    className='p-4 mx-16 my-2 w-72 rounded-md bg-black text-white font-medium border' 
                    placeholder='Email or mobile number' />
                <input ref={pwd} type = "text"
                    className='p-4 mx-16 my-2 w-72 rounded-md  bg-black text-white font-medium border' 
                    placeholder='Password' />
                <button className='h-10 mx-16 my-4 w-72 rounded-md bg-red-700 text-white font-bold'
                    onClick={ValidateInputs}>{isSignIn? "Sign in" : "Sign up"}</button>
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
