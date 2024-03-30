import { Link } from 'react-router-dom'
import './login.scss'

function Login() {
  return (
    <div className='login'>
      <div className='card'>
        
        <div className='left'>
          <h1>kapiSo</h1>
          <p>欢迎来到kapiSo</p>
          <span>没有帐户？</span>
          <Link to='/register'>
            <button>创建账户</button>
          </Link>
          
        </div>

        <div className='right'>
          <h2>登录</h2>
          <form>
            <input type='text' placeholder='用户名' />
            <input type='password' placeholder='密码' />
            <button>登录</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login