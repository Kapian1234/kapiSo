import React from 'react'
import './stories.scss'

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: 'wan',
      img:'http://doc.yaojieyun.com/static.runoob.com/images/demo/demo3.jpg',
    },
    {
      id: 1,
      name: 'wan',
      img:'http://doc.yaojieyun.com/static.runoob.com/images/demo/demo3.jpg',
    },
    {
      id: 1,
      name: 'wan',
      img:'http://doc.yaojieyun.com/static.runoob.com/images/demo/demo3.jpg',
    },
    {
      id: 1,
      name: 'wan',
      img:'http://doc.yaojieyun.com/static.runoob.com/images/demo/demo3.jpg',
    },


  ]
  return (
    <div className='stories'>
      {/* <div className="story">         
        <img src={story.img}/>
        <span>{story.name}</span>
      </div> */}
      {
        stories.map(
          story => (
            <div className="story">         
              <img src={story.img}/>
              <span>{story.name}</span>
            </div>
          )
        )
      }
    </div>
  )
}

export default Stories