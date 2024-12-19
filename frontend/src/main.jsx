import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  RouterProvider,
  Router,
  Route,
  createBrowserRouter,
} from "react-router-dom";

//importing pages
import Landing_Page from "./components/Landing_Page.jsx";
import Home from "./pages/Home.jsx";

import User from "./pages/user.jsx";
import Recruiter from "./pages/recruiter.jsx";
//user
import Signup_User from "./pages/users/Signup_User.jsx";
import Signin_User from "./pages/users/Signin_User.jsx";
import Profile_User from "./pages/users/Profile_User.jsx";
import Logout from "./components/Logout.jsx";

//recruiter
import Signup_Recruiter from "./pages/recruiter/Signup_Recruiter.jsx";
import Signin_Recruiter from "./pages/recruiter/Signin_Recruiter.jsx";
import Profile_Recruiter from "./pages/recruiter/Profile_Recruiter.jsx";
import Dashboard_Recruiter from "./pages/recruiter/Dashboard_Recruiter.jsx";
import Create_Job from "./pages/recruiter/Create_Job.jsx";
import View_Job from "./pages/View_Job.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing_Page />,
    children: [
      {
        path: "job/:id",
        element: <View_Job />,
      },
      {
        //user
        path: "user",
        element: <User />,
        children: [
          {
            path: "signup",
            element: <Signup_User />,
          },
          {
            path: "signin",
            element: <Signin_User />,
          },
          {
            path: "profile",
            element: <Profile_User />,
          },
          {
            path: "logout",
            element: <Logout />,
          },
        ],
      },
      {
        //recruiter
        path: "recruiter",
        element: <Recruiter />,
        children: [
          {
            path: "signup",
            element: <Signup_Recruiter />,
          },
          {
            path: "signin",
            element: <Signin_Recruiter />,
          },
          {
            path: "profile",
            element: <Profile_Recruiter />,
          },
          {
            path: "logout",
            element: <Logout />,
          },
          {
            path: "dashboard",
            element: <Dashboard_Recruiter />,
            children: [
              {
                path: "job/:id",
                element: <View_Job />,
              },
            ],
          },
          {
            path: "createjob",
            element: <Create_Job />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
