import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div>
      <div className='form'>
      <div className='Sign_up'>
      <h1>Log in</h1>
      <div className='input-details'>
      <input type="mail" placeholder='Email' />
      <input type="password" placeholder='password' />
      </div>
      <button>LOGIN</button>
      </div>
    </div>
    </div>
  )
}

export default Login