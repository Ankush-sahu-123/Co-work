import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] =useState("");

    const [usermenu,setUsermenu] = useState(false);

   


  return (
    <div className='navbar'>
        <h1 id='logo' className='logo'>Specters</h1>
        <ul className="navbar-menu">
          <Link to="/Home">
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
          </Link>
          <Link to="/About">
            <li onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>about</li>
          </Link>
          <Link to="/Services">
            <li onClick={()=>setMenu("services")} className={menu==="services"?"active":""}>services</li>
          </Link>
          <Link to="/Contacts">
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</li>
          </Link>
          <Link to="/Search">
          <div onClick={()=>setMenu("search")} className={menu==="search"?"search-active":""}>
            <img  src={assets.search_icon} alt="" />
            <p>Search</p>
          </div>
          </Link>
          
        </ul>
        <div className="navbar-right">
            {/* <Link to="/Signup"> 
            <button>sign up</button>
            </Link>
            <Link to="/Login">
            <button>log in</button>
            </Link> */}
            <img className='navimg' onClick={()=>setUsermenu(prev=>!prev)} src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=" alt=""/>

            <div className={usermenu ? "details active" : "details"}>
              <img className='detail-img' src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=" alt="" />
              <p>Rock Star</p>
            </div>
        </div>
    </div>
  )
}
export default Navbar