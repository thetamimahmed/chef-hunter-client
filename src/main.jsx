import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layouts/Main.jsx';
import Home from './components/Home.jsx';
import Blog from './components/Blog.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import AuthProvider from './components/Providers/AuthProvider.jsx';
import ChefDetails from './components/Chefs/ChefRecipes.jsx';
import ChefRecipes from './components/Chefs/ChefRecipes.jsx';
import PrivateRoute from './components/route/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('https://chef-recipe-hunter-server-thetamimahmed.vercel.app/chefs')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/chef/:id',
        element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
        loader: ({params}) => fetch(`https://chef-recipe-hunter-server-thetamimahmed.vercel.app/chefs/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
