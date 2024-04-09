import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import '../../hover.css';

const NavBar = () => {

    const {currentUser} = useContext(AuthContext);//获取用户信息

    const {toggle, darkMode} = useContext(DarkModeContext);//获取夜间模式切换函数

  return (
    <div className='navbar'>
        
        <div className='left'>
            <Link to='/'>
                <span className='hvr-skew'>kapiSo</span>
            </Link>
            <Link to='/' >
                <HomeIcon className='hvr-grow'/>
            </Link>
            
            {
                darkMode ? <LightModeIcon onClick={toggle} className='hvr-grow'/> : <DarkModeIcon onClick={toggle} className='hvr-grow'/>
            }
            <AppsIcon className='hvr-grow'/>
            <div className="search">
                <SearchIcon/>
                <input type="text" placeholder='搜索...' className='hvr-forward'/>
            </div>
        </div>
        
        <div className='right'>
            <AccountCircleIcon className='hvr-grow'/>
            <EmailIcon className='hvr-grow'/>
            <NotificationsIcon className='hvr-grow'/>
            <div className="user hvr-grow">
                <img src={currentUser.profilePic} alt=''/>
                <span>{currentUser.name}</span>
            </div>
        </div>
    
    </div>
  )
}

export default NavBar