import React from 'react'
import './BurgerButton.scss'


const BurgerMenu = ({onClick}) => {

  return (
    <nav>
        <div className='LeftSideBar-BurgerButton' role="button" onClick={onClick}>
            {/* this status should toggle */}
            <i></i>
            <i></i>
            <i></i>
        </div>
    </nav>
  )
}

export default BurgerMenu