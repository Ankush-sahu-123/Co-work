import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'


const Home = () => {

  const [category, setCategory] = useState("All");


  return (
    <div>
      <Header />

      <div className="category">
        <h1>Book your Seat</h1>
        <p className='explore-menu-text'>get place for meeting, cowork & study</p>
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>

      <div className='sample-spaces'>
        <div className='cowork-sample-spaces'>
          <div className="type-name-text">
            <p>Cowork Spaces</p>
          </div>
          <div className='cards'>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1557022457-80a0ebecce01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpYnJhcnklMjB3b3JraW5nJTIwZGVza3N8ZW58MHx8MHx8fDA%3D" alt="" />
              <div className="space-content">
                <div className="space-data">
                  <h4>Specters Library, Marvel residency</h4>
                  <p>Near Gurukrupa heritage, Kamothe, Mumbai</p>
                  <div className="price">₹ <span>499</span></div>
                </div>
                <div className="detail-book">
                  <button className="view-details">View Details</button>
                  <button className="book">Book</button>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1557022457-80a0ebecce01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpYnJhcnklMjB3b3JraW5nJTIwZGVza3N8ZW58MHx8MHx8fDA%3D" alt="" />
              <div className="space-content">
                <div className="space-data">
                  <h4>Specters Library, Marvel residency</h4>
                  <p>Near Gurukrupa heritage, Kamothe, Mumbai</p>
                  <div className="price">₹ <span>499</span></div>
                </div>
                <div className="detail-book">
                  <button className="view-details">View Details</button>
                  <button className="book">Book</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='meeting-sample-spaces'>
          <div className="type-name-text">
            <p>Meeting Spaces</p>
          </div>
          <div className='cards'>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1557022457-80a0ebecce01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpYnJhcnklMjB3b3JraW5nJTIwZGVza3N8ZW58MHx8MHx8fDA%3D" alt="" />
              <div className="space-content">
                <div className="space-data">
                  <h4>Specters Library, Marvel residency</h4>
                  <p>Near Gurukrupa heritage, Kamothe, Mumbai</p>
                  <div className="price">₹ <span>499</span></div>
                </div>
                <div className="detail-book">
                  <button className="view-details">View Details</button>
                  <button className="book">Book</button>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1557022457-80a0ebecce01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpYnJhcnklMjB3b3JraW5nJTIwZGVza3N8ZW58MHx8MHx8fDA%3D" alt="" />
              <div className="space-content">
                <div className="space-data">
                  <h4>Specters Library, Marvel residency</h4>
                  <p>Near Gurukrupa heritage, Kamothe, Mumbai</p>
                  <div className="price">₹ <span>499</span></div>
                </div>
                <div className="detail-book">
                  <button className="view-details">View Details</button>
                  <button className="book">Book</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='study-sample-spaces'>
          <div className="type-name-text">
            <p>Study Spaces</p>
          </div>
          <div className='cards'>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1557022457-80a0ebecce01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpYnJhcnklMjB3b3JraW5nJTIwZGVza3N8ZW58MHx8MHx8fDA%3D" alt="" />
              <div className="space-content">
                <div className="space-data">
                  <h4>Specters Library, Marvel residency</h4>
                  <p>Near Gurukrupa heritage, Kamothe, Mumbai</p>
                  <div className="price">₹ <span>499</span></div>
                </div>
                <div className="detail-book">
                  <button className="view-details">View Details</button>
                  <button className="book">Book</button>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1557022457-80a0ebecce01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpYnJhcnklMjB3b3JraW5nJTIwZGVza3N8ZW58MHx8MHx8fDA%3D" alt="" />
              <div className="space-content">
                <div className="space-data">
                  <h4>Specters Library, Marvel residency</h4>
                  <p>Near Gurukrupa heritage, Kamothe, Mumbai</p>
                  <div className="price">₹ <span>499</span></div>
                </div>
                <div className="detail-book">
                  <button className="view-details">View Details</button>
                  <button className="book">Book</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home