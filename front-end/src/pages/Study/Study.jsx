import React, { useState } from 'react'
import "./Study.css"
import Spaces from '../Spaces/Spaces';

const Study = () => {

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
                <input type="date" name="" id="" />
              </div>
              <div className="duration-data">
                <h4>To:</h4>
                <input type="date" name="" id="" />
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
        <Spaces />
      </div>
    </div>
  )
}

export default Study