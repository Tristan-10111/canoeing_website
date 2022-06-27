import React from 'react'
import logo from '../assets/Daisy Kayak.png'
import LeftSideBar from '../components/LeftSideBar/leftSideBar'
import {GoSignIn} from 'react-icons/go';

function Privacy() {
  return (
    <>
    <div className="bgTint"></div>

 <nav className="nav-bar">
    <LeftSideBar />
     <img src={logo} alt='logo' />
<ul className="nav-menu">
     <GoSignIn />
</ul>
</nav>
</>
  )
}

export default Privacy