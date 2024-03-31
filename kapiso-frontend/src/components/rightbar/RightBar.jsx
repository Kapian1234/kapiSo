import React from 'react'
import './rightbar.scss'

const RightBar = () => {
  return (
    <div className='rightbar'>
            
        <div className="item">
            <span>推荐</span>
            <div className="user">
                <div className="userInfo">
                    <img src='' alt=''/>
                    <span>kapino</span>
                </div>
                <div className="buttons">
                    <button>关注</button>
                    <button>忽略</button>
                </div>
            </div>
        </div>  
        
        <div className="item">
            <span>最近活动</span>
            <div className="user">
                <div className="userInfo">
                    <img src='' alt=''/>
                    <p>
                        <span>kapino</span>
                        更换了头像
                    </p>   
                </div>
                <span>1分钟前</span>
            </div>
        </div>  
        
        <div className="item">
            <span>在线</span>
            <div className="user">
                <div className="userInfo">
                    <img src='' alt=''/>
                    <div className="online"></div>
                    <span>kapino</span>             
                </div>
            </div>
        </div>  
        
    </div>
  )
}

export default RightBar