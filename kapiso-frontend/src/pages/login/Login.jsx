import { Link } from 'react-router-dom'
import './login.scss'
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';

function Login() {

  const [isMoved, setIsMoved] = useState(false);
  const handleMoveButtonClick = () => {
    setIsMoved(prevState => !prevState);
  };

  const {currentUser, login} = useContext(AuthContext);
  const handleLogin = () =>{
    login();
  }

  return (
    <div className='login'>
      <div className='card'>
        
      <div className='left'>
          <h2>注册</h2>
          <form>
            <input type='text' placeholder='用户名' />
            <input type='password' placeholder='密码' />
            <input type='email' placeholder='邮箱' />
            <button>创建账户</button>
          </form>
        </div>

        <div className='right'>
          <h2>登录</h2>
          <form>
            <input type='text' placeholder='用户名' />
            <input type='password' placeholder='密码' />
            <button onClick={handleLogin}>登录</button>
          </form>
        </div>

        <div className={`cover ${isMoved ? 'move' : ''}`}>
          <h1>kapiSo</h1>
          <p>欢迎来到kapiSo</p>
          <span>{isMoved? '已有帐号？' : '没有帐号？'}</span>
          <button onClick={handleMoveButtonClick}>{isMoved? '登录' : '创建账号'}</button>
        </div>

      </div>
    </div>
  )
}

export default Login