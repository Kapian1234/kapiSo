import React from 'react'
import './posts.scss'
import Post from './Post'
import { useQuery } from "@tanstack/react-query"
import { makeRequest } from "../../axios"

const Posts = () => {

  const { isLoading, error, data } = useQuery(
    {
      queryKey: ["posts"],
      queryFn: () => makeRequest.get("/posts").then((res) => {return res.data})
    }
  )
  // console.log(data)

  return (
    <div className='posts'>
      {
        error?
          <p className='prompt'>加载失败</p>
          :
          isLoading?
            <p className='prompt'>加载中</p>
            :
            data.map((post) =>(
              <Post key={post.id} post={post}/>
            ))
      }
    </div>
  )
}

export default Posts