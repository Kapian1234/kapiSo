import React from 'react'
import './posts.scss'
import Post from './Post'

const Posts = () => {

  const posts = [
    {
      id: 3,
      userId: 1,
      name: 'xiaoming',
      profilePic: 'https://a.520gexing.com/uploads/allimg/2021042109/uqaqhuvavt0.jpg',
      desc: '你好呀',
      img: 'http://doc.yaojieyun.com/static.runoob.com/images/demo/demo3.jpg',
    },
    {
      id: 3,
      userId: 1,
      name: 'xiaoming',
      profilePic: 'https://a.520gexing.com/uploads/allimg/2021042109/uqaqhuvavt0.jpg',
      desc: '你好呀',
      img: 'http://doc.yaojieyun.com/static.runoob.com/images/demo/demo3.jpg',
    },
    {
      id: 3,
      userId: 1,
      name: 'xiaoming',
      profilePic: 'https://a.520gexing.com/uploads/allimg/2021042109/uqaqhuvavt0.jpg',
      desc: '你好呀',
      img: 'http://doc.yaojieyun.com/static.runoob.com/images/demo/demo3.jpg',
    },
    {
      id: 3,
      userId: 1,
      name: 'xiaoming',
      profilePic: 'https://a.520gexing.com/uploads/allimg/2021042109/uqaqhuvavt0.jpg',
      desc: '你好呀',
      img: 'http://doc.yaojieyun.com/static.runoob.com/images/demo/demo3.jpg',
    },
  ]

  return (
    <div className='posts'>
      {
        posts.map(post =>(
          <Post post={post}/>
        ))
      }
    </div>
  )
}

export default Posts