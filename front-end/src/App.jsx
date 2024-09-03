import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Contacts from './pages/Contacts/Contacts'
import Search from './pages/Search/Search'
import Meeting from './pages/Meeting/Meeting'
import Cowork from './pages/Cowork/Cowork'
import Study from './pages/Study/Study'
import SpacesCowork from './Spaces/SpacesCowork/SpacesCowork'
import SpacesMeet from './Spaces/SpacesMeet/SpacesMeet'
import SpacesStudy from './Spaces/SpacesStudy/SpacesStudy'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/Contacts' element={<Contacts/>} />
        <Route path='/Search' element={<Search/>} />
        <Route path='/Meeting' element={<Meeting/>} />
        <Route path='/Cowork' element={<Cowork/>} />
        <Route path='/Study' element={<Study/>} />
        <Route path='/SpacesCowork' element={<SpacesCowork/>} />
        <Route path='/SpacesMeet' element={<SpacesMeet/>} />
        <Route path='/SpacesStudy' element={<SpacesStudy/>} />
      </Routes>
    </div>
  )
}

export default App