import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import google from '../../assets/google.svg'

function LoginCard() {

  const navigate = useNavigate();
  const token = localStorage.getItem('token')
  token ? navigate('/') : navigate('/login');
  const handleLogin = () => window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinboxasgn.vercel.app/';

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-black text-white'>
      <div className='text-center space-y-10 px-20 rounded-2xl bg-[#111214] border border-[#343A40]'>
        <div className=''>
          <div className='font-semibold text-xl m-6'>
              Create a new account
          </div>
          <div className='flex items-centermt-10 px-20 py-2 border border-[#707172] rounded-lg text-[#CCCCCC] cursor-pointer'
            onClick={handleLogin}
          >
            <img src={google} alt='google' className='w-4 mr-2'></img>
            Sign Up with Google
          </div>
        </div>
        <div className="">
            <Link
              to="/login" 
              className="px-5 py-3 text-sm bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] rounded-lg cursor-pointer"
            >
              Create an Account
            </Link>
            <div className="my-8 text-[#909296]">
              Already have an account?{" "}
              <Link to="/" className="text-[#C1C2C5]">
                Sign In
              </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default LoginCard;