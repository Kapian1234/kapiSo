import LeftBar from './components/leftbar/LeftBar';
import NavBar from './components/navbar/NavBar';
import RightBar from './components/rightbar/RightBar';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import './style.scss';
import './app.scss';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

function App() {
  
  const {currentUser} = useContext(AuthContext); //登陆状态

  const ProtectedRoute = ({children}) =>{
    // if(!currentUser){
    //   return <Navigate to="/login"/>
    // }
    return children
  }//访问保护

  const {darkMode} = useContext(DarkModeContext)//夜间模式

  const Layout = () =>{
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <div className='appLayout'>
          <NavBar/>   
        <div className='mainPage'>
          <div className='leftDiv' style={{flex: '2'}}><LeftBar/></div>
          <div style={{flex: '6'}}><Outlet/></div>
          <div className='rightDiv' style={{flex: '3'}}><RightBar/></div>
        </div> 
        </div>  
      </div>
    )
  }//主页布局

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login/>,
    },
    {
      path: '/',
      element: <ProtectedRoute><Layout/></ProtectedRoute>,//访问保护
      children: [
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: 'profile/:id',
          element: <Profile/>,
        }
      ],
    }
  ]);//路由

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
