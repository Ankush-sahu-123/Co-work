import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <div className='form'>
      <div className='Sign_up'>
        <h1>Sign up</h1>
        <div className='input-details'>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
          <input type="mail" placeholder='Email' />
          <input type="password" placeholder='password' />
        </div>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Signup