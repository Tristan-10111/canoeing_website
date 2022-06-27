import React, {useContext} from 'react'
import './LeftSection.scss'
import { LeftSideBarContex } from '../leftSideBar'
import BurgerButton from '../BurgerButton/BurgerButton'


const LeftSection = () => {
  const{isShowSideBar, setIsShowSideBar} = useContext(LeftSideBarContex);
  return (
    <div className={`LeftSideBar-LeftSection LeftSideBar-LeftSection--${isShowSideBar ? 'show' : 'hide'}`}>
        <div className="LeftSideBar-LeftSection-topWrapper">
          <BurgerButton onClick={() => setIsShowSideBar(false)}/>
        </div>
        <ul className="LeftSideBar-LeftSection-menuWrapper">
          <li>
            <a href="/">
              Home
            </a>
            </li>
          <li>
            <a href="/about">
              About
            </a>
            </li>
          <li>
            <a href="/contact">
              Contact
            </a>
            </li>
          <li>
            <a href="/shop">
              Shop
            </a>
            </li>
          <li>
            <a href="/privacy">
              Privacy
            </a>
            </li>
    
        </ul>
    </div>
  )
}

export default LeftSection