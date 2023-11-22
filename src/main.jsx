import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'

import Database from './Database/Database.jsx'
import AuthProvider from './Authprovider/Authprovider.jsx'
import Profile from './Profile/Profile.jsx'
import Event from './Event/Event.jsx'
import PrivateRoute from './Privetrout/PrivetRoute.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/alumniDatabase",
        element: (
          <PrivateRoute>
            <Database></Database>
          </PrivateRoute>
        ),
      },

      {
        path: "/profile/:id",
        element: <Profile></Profile>,
        loader: ({ params }) =>
          fetch(`https://bcbhs-server-site.vercel.app/userData/${params.id}`),
      },
      {
        path: "/events",
        element: <Event></Event>,
        loader: () => fetch("./Events.json"),
      },
     
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  
    
  </React.StrictMode>
);
