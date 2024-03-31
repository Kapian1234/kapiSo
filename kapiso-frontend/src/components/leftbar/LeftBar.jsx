import React from 'react'
import './leftbar.scss'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';

const LeftBar = () => {
  return (
    <div className='leftbar'>
        <div className="menu">
            <div className="item">
                <PersonIcon/>
                <span>联系人</span>
            </div>
            <div className="item">
                <PeopleAltIcon/>
                <span>群聊</span>
            </div>
            <div className="item">
                <img src='' alt=''/>
                <span>Marketplace</span>
            </div>
            <div className="item">
                <img src='' alt=''/>
                <span>Watch</span>
            </div>
            <div className="item">
                <img src='' alt=''/>
                <span>Memories</span>
            </div>
        </div>
    </div>
  )
}

export default LeftBar