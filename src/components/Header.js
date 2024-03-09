import React from 'react'
import MENU from "./images/ham-menu.png"
import YT_LOGO from "./images/yt-logo-2.png";
import USER_ICON from "./images/user-icon-2.jpg";
import SEARCH_ICON from "./images/yt-search-icon.jpg"
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  };
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img src={MENU} className='h-8 px-3 cursor-pointer' onClick={() => toggleMenuHandler()}/>
            <Link to="/"><img src={YT_LOGO} className='h-8' onClick={() => toggleMenuHandler()}/></Link>
        </div>
        <div className='col-span-10  flex justify-center'>
            <input type='text' className='w-1/2 border border-gray-400 px-2 rounded-l-full'/>
            <img src={SEARCH_ICON} className='h-8  rounded-r-full border border-gray-400'/>
        </div>
        <div>
            <img src={USER_ICON} className='h-8'/>
        </div>
    </div>
  )
}

export default Header