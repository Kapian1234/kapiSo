import React, { useContext } from 'react'
import './comments.scss'
import { AuthContext } from '../../context/authContext'
import SendIcon from '@mui/icons-material/Send';

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    const comments = [
        {
            id: 3,
            userId: 1,
            name: 'xiaoming',
            profilePic: 'https://a.520gexing.com/uploads/allimg/2021042109/uqaqhuvavt0.jpg',
            desc: '这是一个评论',
          },
    ]

  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePic} alt=''/>
            <input type='text' placeholder='评论'/>
            <SendIcon/>
        </div>
        {
            comments.map(
                (comment) => {
                    return(
                        <div className="comment">
                            <div className="info"> 
                                <div className="userInfo">
                                    <img src={comment.profilePic} alt=''/>
                                    <span>{comment.name}</span>                                     
                                </div>
                                <div className="date">1小时前</div>        
                            </div>
                            <p>{comment.desc}</p>
                        </div>
                    )
                }
            )
        }
    </div>
  )
}

export default Comments