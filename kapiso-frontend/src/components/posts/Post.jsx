import React, { useContext, useState } from 'react'
import './post.scss'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import Comments from '../comments/Comments';
import '../../hover.css';
import moment from "moment"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { makeRequest } from "../../axios"
import { AuthContext } from '../../context/authContext';
require('moment/locale/zh-cn')

const Post = ({post}) => {

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(//获取赞数
    {
      queryKey: ["likes", post.id],
      queryFn: () => makeRequest.get("/likes?postId=" + post.id).then((res) => {return res.data})
    }
  )
  console.log(data)

  //评论区开关
  const [commentsOpen, setCommentsOpen] = useState(false)
  const commentsToggle = ()=> {
    setCommentsOpen(current => !current)
  }

  const queryClient = useQueryClient()
  const mutation = useMutation(
    (liked)=>{//执行mutation的函数
        if(liked) return makeRequest.delete('/likes?postId=' + post.id)
        return makeRequest.post('/likes', {postId: post.id})
    },
    {
        //使键为likes的缓存失效，更新缓存
        onSuccess: () =>{queryClient.invalidateQueries(['likes'])}
    }
  )
  const handleLike = () =>{
    mutation.mutate(data.includes(currentUser.id));
  }


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
              <span className='date'>{moment(post.createdTime).fromNow()}</span>             
            </div>
          </div>
          <MoreHorizIcon className='hvr-grow'/>
        </div>
        
        <div className="content">
          <p>{post.desc}</p>
          {post.img? <img src={'./upload/' + post.img} alt=''/> : null}
        </div>
        
        <div className="info">
          <div className="item">
            {
              isLoading?
                null
                :
                data.includes(currentUser.id) ? 
                  <FavoriteIcon className='hvr-grow' style={{color: "red"}} onClick={handleLike}/> 
                  : 
                  <FavoriteBorderIcon className='hvr-grow' onClick={handleLike}/>
            }
            {isLoading? '加载中' : data.length}
          </div>
          <div className="item" onClick={commentsToggle}>
            <CommentIcon className='hvr-grow'/>
          </div>
          <div className="item">
            <ShareIcon className='hvr-grow'/>
          </div>
                   
        </div>
      
      {commentsOpen && <Comments postId={post.id}/>}

      </div>
    </div>
  )
}

export default Post