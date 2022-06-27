import React, {useState} from 'react'
import './leftSidebar.scss'
import TopSection from './TopSection/Topsection.jsx'
import LeftSection from './LeftSection/LeftSection.jsx'


export const LeftSideBarContex = React.createContext({});
const LeftSideBar = () =>{
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  return (

    <LeftSideBarContex.Provider 
    value={{isShowSideBar, setIsShowSideBar}}>
      <div className='LeftSideBar-container'>
        <TopSection />
        <LeftSection />
      </div>
      </LeftSideBarContex.Provider>
  )
}

export default LeftSideBar