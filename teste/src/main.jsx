import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider, Router} from "react-router-dom"
import Home from './components/Home.jsx'
import ErroPage from './ErroPage.jsx'
import Form from './components/Form.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErroPage/>, 
    children: [
      {
        path: "home",
        element: <Home/>,
        errorElement: <ErroPage/>,
      },
      {
        path: "form",
        element: <Form/>,
        errorElement: <ErroPage/>,
      },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
