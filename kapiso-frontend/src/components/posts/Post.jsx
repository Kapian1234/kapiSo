import React, { useState } from 'react'
import './post.scss'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';
import Comments from '../comments/Comments';
import '../../hover.css';

const Post = ({post}) => {

  const [commentsOpen, setCommentsOpen] = useState(false)
  const commentsToggle = ()=> {
    setCommentsOpen(current => !current)
  }

  const liked = false

  return (
    <div className='post'>
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <Link to={'/profile/'+post.userId}><img src={post.profilePic} alt='' className='hvr-grow'/></Link>
            <div className="details">
              <Link to={'/profile/'+post.userId} style={{textDecoration: 'none'}}>
                <span className='name'>{post.name}</span>           
              </Link> 
              <span className='date'>1 min ago</span>             
            </div>
          </div>
          <MoreHorizIcon className='hvr-grow'/>
        </div>
        
        <div className="content">
          <p>{post.desc}</p>
          {post.img? <img src={post.img} alt=''/> : null}
        </div>
        
        <div className="info">
          <div className="item">
            {liked? <FavoriteIcon className='hvr-grow'/> : <FavoriteBorderIcon className='hvr-grow'/>}
            12
          </div>
          <div className="item" onClick={commentsToggle}>
            <CommentIcon className='hvr-grow'/>
            8
          </div>
          <div className="item">
            <ShareIcon className='hvr-grow'/>
          </div>
                   
        </div>
      
      {commentsOpen && <Comments/>}

      </div>
    </div>
  )
}

export default Post