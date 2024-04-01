import './profile.scss'
import EmailIcon from '@mui/icons-material/Email';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Posts from '../../components/posts/Posts';

function Profile() {
  return (
    <div className='profile'>
      <img className='cover' src='http://doc.yaojieyun.com/static.runoob.com/images/demo/demo3.jpg' alt=''/>
      <div className="profileContainer">
        <img className='profilePic' src='https://a.520gexing.com/uploads/allimg/2021042109/uqaqhuvavt0.jpg' alt=''/>
        <div className="userInfo">
          <div className="block1">
            <span>kapian</span>
            <div className="block2">
              <button>关注</button>
              <EmailIcon/>
              <MoreHorizIcon/>
            </div>
          </div>          
          <p>这里是简介</p>
        </div>
      </div>
      <div className="profilePosts">
        <Posts/>
      </div>     
    </div>
  )
}

export default Profile