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

const NavBar = () => {

    const {currentUser} = useContext(AuthContext);//获取用户信息

    const {toggle, darkMode} = useContext(DarkModeContext);//获取夜间模式切换函数

  return (
    <div className='navbar'>
        
        <div className='left'>
            <Link to='/' style={{textDecoration:'none', cursor:'pointer'}}>
                <span>kapiSo</span>
            </Link>
            <Link to='/' style={{textDecoration:'none', cursor:'pointer'}}>
                <HomeIcon />
            </Link>
            
            {
                darkMode ? <LightModeIcon onClick={toggle}/> : <DarkModeIcon onClick={toggle}/>
            }
            <AppsIcon/>
            <div className="search">
                <SearchIcon/>
                <input type="text" placeholder='搜索...'/>
            </div>
        </div>
        
        <div className='right'>
            <AccountCircleIcon/>
            <EmailIcon/>
            <NotificationsIcon/>
            <div className="user">
                <img src={currentUser.profilePic} alt=''/>
                <span>{currentUser.name}</span>
            </div>
        </div>
    
    </div>
  )
}

export default NavBar