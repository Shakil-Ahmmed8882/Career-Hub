import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AppliedJobs from './Components/Applied-Jobs/AppliedJobs.jsx';
import Error from './Components/Error/Error.jsx';
import Jobs from './Components/Home/jobs/Jobs.jsx';
import { JobDetails } from './Components/Home/jobs/Show-details/JobDetails';
import MyBarChart from './Components/Data-rechart/data';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/jobs',
        element:<Jobs></Jobs>
      },{
        path:'/applied-jobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/jobs/:id',
        loader:()=> fetch('jobs.json'),
        element:<JobDetails></JobDetails>
      },
      {
        path:'/jobs/aaa',
        element:<MyBarChart></MyBarChart>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
