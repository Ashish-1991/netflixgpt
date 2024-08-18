import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignInToggle = () =>{
      console.log(isSignIn)
      setIsSignIn(!isSignIn)
  }



  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_small.jpg'/>
        </div>
        <form className='w-3/12 absolute p-12 bg-black mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-65'>
            <h1 className='font-bold py-4 m-2 text-2xl'>{isSignIn ? "Sign In" : "Sign Up" }</h1>
            {!isSignIn && (<input type="text" placeholder="Full Name" className='py-2 m-2 w-full bg-gray-700'/>)}
            <input type="text" placeholder="Email address" className='py-2 m-2 w-full bg-gray-700'/>
            <input type="text" placeholder="Password" className='m-2 py-2 w-full bg-gray-700'/>
            <button className='m-2 py-2 bg-red-700 w-full rounded-lg'>{isSignIn ? " Sign In " : " Sign Up "}</button> 
            <p className='py-10 cursor-pointer underline' onClick={handleSignInToggle}>{isSignIn ? "New to netflix ? Please sign up first" : "Already a user ? Sign In Now !!"}</p>

        </form>
    </div>
   
  )
}

export default Login