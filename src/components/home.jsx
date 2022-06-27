import React from 'react'
import './home.css'
import logo from '../assets/Daisy Kayak.png'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import {GoSignIn} from 'react-icons/go';
import Button from "@mui/material/Button";
import Store from '@mui/icons-material/Store';
import LeftSideBar from './LeftSideBar/leftSideBar';


  

function firstHome() {
  return (
    <div className='firstHome'>

<div className="bgTint"></div>
        
{/* navbar */}
          <nav className="nav-bar">
                <LeftSideBar />
            <img src={logo} alt='logo' />
           <ul className="nav-menu">
              <GoSignIn />
            </ul>
          </nav>
{/* navbar end */}


        {/* <video src={videoBg} autoPlay loop muted/> */}
  
  {/* content */}
  <div className="content">
             <p className='top-text'>Explore the ocean</p>
            <h1 className='heading-1'>KAYAK</h1>
            <Button startIcon={<Store />} size='large'  variant="contained" color='primary' className='Btn' href='/shop'>
              Shop now
            </Button>
            </div>
      {/* content */}

      {/* social links */}
<div className="social-links">
<FaInstagram className='instagram' />
<FaFacebook className='facebook'/>
<FaTwitter className='twitter'/>
<FaGoogle className='google'/>
      </div>
      {/* socail links */}
    </div>
  )
}

export default firstHome