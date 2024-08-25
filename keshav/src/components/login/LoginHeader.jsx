import React from 'react'
import logo from '../../assets/logo12.svg'

function LoginHeader() {
  return (
    <div className='h-16 w-screen flex justify-center items-center fixed border-[#25262B] bg-[#121212] border-b-2'>
        <img src={logo} alt='logo' className='h-7'/>
    </div>
  )
}

export default LoginHeader