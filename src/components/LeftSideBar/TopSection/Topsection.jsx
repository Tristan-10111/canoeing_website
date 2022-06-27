import React, {useContext} from 'react'
import './Topsection.scss'
import BurgerButton from '../BurgerButton/BurgerButton'
import { LeftSideBarContex } from '../leftSideBar'


const TopSection = () => {
  const{ setIsShowSideBar} = useContext(LeftSideBarContex);
  return (
    <div className='LeftSideBar-TopSection'>
        <BurgerButton onClick={() => setIsShowSideBar(true)}/>
    </div>
  )
}

export default TopSection