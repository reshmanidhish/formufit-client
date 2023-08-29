import Index from "views/Index.js";
import Profile from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Tables from "views/examples/Tables.js";
import Icons from "./pages/IconsPage";
import Questionare from "./pages/QuestionarePage";
import React from "react";
import MyAccount from "./pages/MyAccount";
import CreateRecipes from "./pages/CreateRecipePage";
import Recipes from "./pages/AllRecipesPage";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-home",
    component: <Index />,
    layout: "/main",
  }, {
    path: "/workouts",
    name: "Workouts",
    icon: "fas fa-dumbbell",
    component: <Index />,
    layout: "/main",
  },{
    path: "/recipes/create",
    name: "Create recipes",
    icon: "fas fa-utensils",
    component: <CreateRecipes/>,
    layout: "/main",
  },{
    path: "/recipes",
    name: "Diet recipes",
    icon: "fas fa-utensils",
    component: <Recipes/>,
    layout: "/main",
  },{
    path: "/account",
    name: "My Account 2",
    icon: "fas fa-user",
    component: <MyAccount />,
    layout: "/main",
  },{
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/main",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/main",
  },
  {
    path: "/questionare",
    name: "Questionare",
    icon: "ni ni-single-02 text-yellow",
    component: <Questionare />,
    layout: "/main",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/main",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <LoginPage />,
    layout: "/auth",
  },
  {
    path: "/signup",
    name: "Signup",
    icon: "ni ni-circle-08 text-pink",
    component: <SignupPage />,
    layout: "/auth",
  },
];
export default routes;
