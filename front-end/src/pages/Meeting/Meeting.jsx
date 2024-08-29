import React, { useState } from 'react'
import "./Meeting.css"
import SpacesMeet from '../../Spaces/SpacesMeet/SpacesMeet';

const Meeting = () => {

  const [showspaces, Setshowspaces] = useState(false);

  return (
    <div>
      <div className="search-material">

        <div className="input-panel">
          <div className='place'>
            <p>Enter City:</p>
            <input className='input-search' type="text" placeholder='Search by city' />
          </div>
          <div className="duration">
            <p>Duration</p>
            <div className="duration-set">
              <div className="duration-data">
                <h4>From:</h4>
                <input type="datetime-local" name="" id="" />
              </div>
              <div className="duration-data">
                <h4>To:</h4>
                <input type="datetime-local" name="" id="" />
              </div>
            </div>
          </div>
          <div className="people">
            <p>Members</p>
            <input type="number" name="" id="" placeholder='Count' />
          </div>
        </div>
        <div className="search-button">
          <button onClick={() => Setshowspaces("search")} className="search-go">Search</button>
        </div>
      </div>
      <div className={showspaces === "search" ? "search active" : "search"}>
        <SpacesMeet/>
      </div>
    </div>
  )
}

export default Meeting