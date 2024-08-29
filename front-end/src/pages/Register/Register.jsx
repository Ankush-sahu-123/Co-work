import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <div className='form'>
      <div className='Sign_up'>
      <h1>Register</h1>
      <div className='input-details'>
      <input type="text" placeholder='Name' />
      <input type="date" placeholder='Age' />
      <input type="email" placeholder='Email' />
      <input type="tel" placeholder='mobile' />
      <input type="text" placeholder='address' />
      <input type="text" placeholder='aadhar number' />
      <input type="password" placeholder='password' />
      </div>
      <button>Register</button>
      </div>
    </div>
  )
}

export default Register