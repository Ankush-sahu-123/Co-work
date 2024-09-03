import React from 'react'
import "./About.css"
import {assets} from '../../assets/assets'

const About = () => {
  return (
   <div className="about">
        <div className="about-name">About:</div>
        <div className="about-content">
            <p className="tagline">Preparing for Dreams need Peace</p>
            <h1 className="about-details">At Dunction, we transform the way you work by offering dynamic, flexible coworking spaces designed to inspire creativity and collaboration. Join us to experience a vibrant community and top-notch amenities tailored to your professional needs.</h1>
            <div className="images">
              <img src={assets.ankush_pic} alt="" />
              <img src={assets.ayush_pic} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
