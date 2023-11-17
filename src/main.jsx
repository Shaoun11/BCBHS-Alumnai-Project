import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import AuthProvider from './Authprovider/Authprovider.jsx'


const router=createBrowserRouter([{
  path:"/",
  element:<MainLayout></MainLayout>,
  children: [
    {
    path:"/",
    element:<Home></Home>
  },
  
    {
    path:"/login",
    element:<Login></Login>
  },
    {
    path:"/register",
    element:<Register></Register>
  }
  
  
  
  
  ]
}])



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
