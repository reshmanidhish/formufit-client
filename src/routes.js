import Index from "views/Index.js";
import Profile from "./pages/ProfilePage";
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
    bodyTypeAvailable: true
  }, {
    path: "/workouts",
    name: "Workouts",
    icon: "fas fa-dumbbell",
    component: <Index />,
    layout: "/main",
    bodyTypeAvailable: true
  },{
    path: "/recipes/create",
    name: "Create recipes",
    icon: "fas fa-utensils",
    component: <CreateRecipes/>,
    layout: "/main",
    bodyTypeAvailable: true
  },{
    path: "/recipes",
    name: "Diet recipes",
    icon: "fas fa-utensils",
    component: <Recipes/>,
    layout: "/main",
    bodyTypeAvailable: true
  },{
    path: "/account",
    name: "My Account 2",
    icon: "fas fa-user",
    component: <MyAccount />,
    layout: "/main",
    bodyTypeAvailable: true
  },{
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/main",
    bodyTypeAvailable: true
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/main",
    bodyTypeAvailable: true
  },
  {
    path: "/questionare",
    name: "Questionare",
    icon: "ni ni-single-02 text-yellow",
    component: <Questionare />,
    layout: "/main",
    bodyTypeAvailable: false
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/main",
    bodyTypeAvailable: true
  }
];
export default routes;
