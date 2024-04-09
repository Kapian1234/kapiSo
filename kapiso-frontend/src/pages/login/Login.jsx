import { Link } from 'react-router-dom'
import './login.scss'
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';


function Login() {

  
  
  //封面移动状态
  const [isMoved, setIsMoved] = useState(false);
  const handleMoveButtonClick = () => {
    setIsMoved(prevState => !prevState);
  };
  
  
  
  //注册
  const [registerInputs, setRegisterInputs] = useState({//输入内容
    username: "",
    email: "",
    password: "",
    name: ""
  })
  const handleRegisterChange = e =>{//更新输入
    setRegisterInputs( (prev) => (
      { 
        ...prev, 
        [e.target.name]: e.target.value
      }
    ))
  }
  const checkRegister = (inputs) =>{
    if (inputs.username == ""){
      setErr('用户名不能为空')
      return false
    } 
    if (inputs.password == "")
    {
      setErr('密码不能为空')
      return false
    } 
    if (inputs.name == ""){
      setErr('昵称不能为空')
      return false
    } 
    return true
  }
  // console.log(registerInputs)
  const [err, setErr] = useState(null)
  const handleRegister = async (e) =>{//提交输入
    e.preventDefault()
    if (checkRegister(registerInputs))//检查表单
    {
      try{
        await axios.post('http://localhost:8800/api/auth/register', registerInputs)
        setErr(null)
      }
      catch (error){
        setErr(error.response.data)
      }      
    }

  }

  
  
  //登录
  const [errLogin, setErrLogin] = useState(null)
  const [loginInputs, setLoginInputs] = useState({
    username: "",
    password: ""
  })
  const handleLoginChange = e =>{//更新输入
    setLoginInputs( (prev) => (
      { 
        ...prev, 
        [e.target.name]: e.target.value
      }
    ))
  }
  // console.log(loginInputs)
  const checkLogin = (inputs) =>{
    if (inputs.username == ""){
      setErrLogin('用户名不能为空')
      return false
    } 
    if (inputs.password == ""){
      setErrLogin('密码不能为空')
      return false
    }
    return true
  }
  const {currentUser, setCurrentUser} = useContext(AuthContext);//当前用户信息
  const handleLogin = async (e) =>{
    e.preventDefault()
    if (checkLogin(loginInputs))//检查表单
    {
      try{
        const res = await axios.post('http://localhost:8800/api/auth/login', loginInputs, {withCredentials: true/*请求会携带如cookies的凭证，以支持跨源请求*/})
        setCurrentUser(res.data);//从服务器得到用户信息后设置当前用户
        setErrLogin(null)         
      }
      catch (error){
        setErrLogin(error.response.data)
      }
    }

  }

  
  
  return (
    <div className='login'>
      <div className='card'>
        
      <div className='left'>
          <h2>注册</h2>
          <form>
            <input type='text' name='username' placeholder='用户名' onChange={handleRegisterChange}/>
            <input type='email' name='email' placeholder='邮箱' onChange={handleRegisterChange}/>
            <input type='password' name='password' placeholder='密码' onChange={handleRegisterChange}/>
            <input type='text' name='name' placeholder='昵称' onChange={handleRegisterChange}/>
            <button onClick={handleRegister}>创建账户</button>
            <p>{err && err}</p>
          </form>
        </div>

        <div className='right'>
          <h2>登录</h2>
          <form>
            <input type='text' name='username' placeholder='用户名' onChange={handleLoginChange}/>
            <input type='password' name='password' placeholder='密码' onChange={handleLoginChange}/>
            <button onClick={handleLogin}>登 录</button>
            <p>{errLogin && errLogin}</p>
          </form>
        </div>

        <div className={`cover ${isMoved ? 'move' : ''}`}>
          <h1>kapiSo</h1>
          <p>欢迎来到kapiSo</p>
          <span>{isMoved? '已有帐号？' : '没有帐号？'}</span>
          <button onClick={handleMoveButtonClick}>{isMoved? '登 录' : '创建账号'}</button>
        </div>

      </div>
    </div>
  )
}

export default Login