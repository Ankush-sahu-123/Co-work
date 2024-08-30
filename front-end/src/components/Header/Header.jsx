import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <video autoPlay loop muted src={assets.video_1}></video>
        <div className="header-contents">
            <h2>Unleash Your Potential in a Productive Space.</h2>
        </div>
    </div>
  )
}

export default Header