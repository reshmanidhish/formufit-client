import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import QuestionarePage from "./pages/QuestionarePage/QuestionarePage";
import React from "react";
import MyAccount from "./pages/MyAccount";

const routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "fas fa-home",
    component: <Index />,
    layout: "/admin",
  },{
    path: "/workouts",
    name: "Workouts",
    icon: "fas fa-dumbbell",
    component: <Index />,
    layout: "/admin",
  },{
    path: "/recipe",
    name: "Diet recipes",
    icon: "fas fa-utensils",
    component: <Index />,
    layout: "/admin",
  },{
    path: "/account",
    name: "My Account 2",
    icon: "fas fa-user",
    component: <MyAccount />,
    layout: "/admin",
  },{
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/questionare",
    name: "Questionare",
    icon: "ni ni-single-02 text-yellow",
    component: <QuestionarePage />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
];
export default routes;
