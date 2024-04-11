import React from 'react'
import './posts.scss'
import Post from './Post'
import { useQuery } from "@tanstack/react-query"
import { makeRequest } from "../../axios"

const Posts = () => {

//   const { isLoading, error, data } = useQuery(["posts"], () =>
//     makeRequest.get("/posts").then((res) => {
//       return res.data;
//   })
// );

  return (
    <div className='posts'>
      {/* {
        data.map((post) =>(
          <Post key={post.id} post={post}/>
        ))
      } */}
    </div>
  )
}

export default Posts