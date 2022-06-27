import React from 'react'
import logo from '../assets/Daisy Kayak.png'
import LeftSideBar from '../components/LeftSideBar/leftSideBar'
import {GoSignIn} from 'react-icons/go';
import sideImg from '../assets/About.jpg';
import rightImg from '../assets/Kayak founder.jpg'
// import BookIcon from '@mui/icons-material/BookOnline'
import './about.scss'

function About() {
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
    
    <div className='sideContent'>
      <div className='overlay'>
     <img src={sideImg} alt='about' className='sideContent-side-img'/>
     </div>
     <span>A</span>
     <span>B</span>
     <span>O</span>
     <span>U</span>
     <span>T</span>
     <span> </span>
     <span>U</span>
     <span>S</span>
     </div>

     <div className='top-content'>
      <h1>Our Story</h1>
      <p>
     Commodi quis repellendus ex rerum nulla ab natus. Aut laudantium ut quia magni.
      </p>
     </div>

     <div className='right-side-image'>
      <img src={rightImg} alt='founder' className='rightSide-image'/>
     </div>

     <div className='CenterText'>
      <h1>Why us?</h1>
      <p>Quo ipsa necessitatibus sint voluptatem impedit.<br /> Commodi quis repellendus ex rerum nulla ab natus.<br /> Aut laudantium ut quia magni.<br />Quo ipsa necessitatibus sint voluptatem impedit. <br />Quo ipsa necessitatibus sint voluptatem impedit. <br />Quo ipsa necessitatibus sint voluptatem impedit. <br />Quo ipsa necessitatibus sint voluptatem impedit.</p>
     </div>
     </>
  )
}

export default About