import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ErrorMassage from './Components/ErrorMassage/ErrorMassage.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import Login from './Components/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorMassage></ErrorMassage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login> ,
        
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs> ,
        loader:()=>fetch('/jobs.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics> ,
        
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs> ,
        
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader:()=>fetch('/jobs.json')
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
