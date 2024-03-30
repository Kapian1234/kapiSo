import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='register'>
      <div className='card'>
        
        <div className='left'>
          <h1>kapiSo</h1>
          <p>欢迎来到kapiSo</p>
          <span>已有帐户帐户？</span>
          <Link to='/login'>
            <button>登录</button>
          </Link>
          
        </div>

        <div className='right'>
          <h2>注册</h2>
          <form>
            <input type='text' placeholder='用户名' />
            <input type='password' placeholder='密码' />
            <input type='email' placeholder='邮箱' />
            <button>创建账户</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register