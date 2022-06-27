import React from 'react'
import logo from '../assets/Daisy Kayak.png'
import LeftSideBar from '../components/LeftSideBar/leftSideBar'
import {GoSignIn} from 'react-icons/go';
import ContactImg from '../assets/Contact.jpg'
import './contact.scss'
import TextField  from '@mui/material/TextField';      
 

function Contact() {
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
   
<div className='TopContent'>
  <img src={ContactImg} alt='about' className='TopContent-img' />
  <span>C</span>
  <span>O</span>
  <span>N</span>
  <span>T</span>
  <span>A</span>
  <span>C</span>
  <span>T</span>
  <span>''</span>
  <span>U</span>
  <span>S</span>
  </div>

<div className='TextField1'>

</div>
</>
  )
}

export default Contact