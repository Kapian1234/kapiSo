import React, { useContext, useState } from 'react'
import './comments.scss'
import { AuthContext } from '../../context/authContext'
import SendIcon from '@mui/icons-material/Send';
import { makeRequest } from "../../axios"
import { useQuery } from "@tanstack/react-query"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import moment from "moment"
require('moment/locale/zh-cn')

const Comments = ({postId}) => {

    const {currentUser} = useContext(AuthContext)

    // const comments = [
    //     {
    //         id: 3,
    //         userId: 1,
    //         name: 'xiaoming',
    //         profilePic: 'https://a.520gexing.com/uploads/allimg/2021042109/uqaqhuvavt0.jpg',
    //         desc: '这是一个评论',
    //       },
    // ]

    const { isLoading, error, data } = useQuery(//获取评论
        {
          queryKey: ["comments"],
          queryFn: () => makeRequest.get("/comments?postId="+postId).then((res) => {return res.data})
        }
    )

    const [desc, setDesc] = useState(null)

    const queryClient = useQueryClient()
    const mutation = useMutation(//发布评论
        (newComment)=>{//执行mutation的函数
            return makeRequest.post('/comments', newComment)
        },
        {//配置对象
            //使键为posts的缓存失效，失效后会从服务器获取数据并更新缓存，保证其它地方的‘posts’是最新状态
            onSuccess: () =>{queryClient.invalidateQueries(['comments'])}
        }
    )


    const handleComment = async (e) =>{
        e.preventDefault()
        mutation.mutate({desc, postId})
        // console.log(desc)
        setDesc('')
    }

  return (
    <div className='comments'>
        <div className="write">
            <img src={currentUser.profilePic} alt=''/>
            <input 
                type='text' 
                placeholder='评论' 
                onChange={(e) => setDesc(e.target.value)}
                value={desc}//输入框的初始值为 desc 变量的值
            />
            <div onClick={handleComment}><SendIcon/></div>
        </div>
        {
            isLoading? '加载中' :
            data.map(
                (comment) => {
                    return(
                        <div className="comment">
                            <div className="info"> 
                                <div className="userInfo">
                                    <img src={comment.profilePic} alt=''/>
                                    <span>{comment.name}</span>                                     
                                </div>
                                <div className="date">{moment(comment.createdTime).fromNow()}</div>        
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