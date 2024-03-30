import Login from './pages/login/Login'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login/>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
