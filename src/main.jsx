import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'
import Home from './Pages/Home';
import HomeLayout from './Layout/HomeLayout';
import Honeymeal from './Pages/Honeymeal';
import Consulthive from './Pages/Consulthive';
import Moviemania from './Pages/Moviemania';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/honey-meal",
        element: <Honeymeal></Honeymeal>
      },
      {
        path: "/consult-hive",
        element: <Consulthive></Consulthive>
      },
      {
        path: "/movie-mania",
        element: <Moviemania></Moviemania>
      },
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
