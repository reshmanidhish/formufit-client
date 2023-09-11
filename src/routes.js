import Profile from "./pages/ProfilePage";
import React from "react";
import MyAccount from "./pages/MyAccount";
import CreateRecipes from "./pages/CreateRecipePage";
import Recipes from "./pages/AllRecipesPage";
import SingleRecipe from "pages/SingleRecipePage";
import EditRecipePage from "pages/editRecipePage";
import AllWorkoutPage from"./pages/AllWorkoutPage";
import WorkoutVideoUploadPage from "./pages/WorkoutVideoUploadPage";
import Trainer from "./pages/Trainer"
import PricingPlan from "./pages/Payment/PricingPlan"
import Payment from "pages/Payment/index1";
import SuccessMessage from "pages/Payment/SuccessMessage";
import CommentRatingForm from "pages/CommentRatingFormPage/CommentRatingForm";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-home",
    // component: <Index />,
    component: <Profile/>,
    layout: "/main",
    bodyTypeAvailable: true,
    ut: 0,
    pu: 0
  }, {
    path: "/workouts",
    name: "Workouts",
    icon: "fas fa-dumbbell text-red",
    component: <AllWorkoutPage />,
    layout: "/main",
    bodyTypeAvailable: true,
    ut: 0,
    pu: 0
  },{
    path: "/recipe/create",
    name: "Create Recipes",
    icon: "fas fa-utensils text-green",
    component: <CreateRecipes/>,
    layout: "/main",
    bodyTypeAvailable: true,
    ut: 1,
    pu: 0
  },{
    path: "/recipes",
    name: "Diet Recipes",
    icon: "fas fa-utensils",
    component: <Recipes/>,
    layout: "/main",
    bodyTypeAvailable: true,
     ut:0,
     pu: 0
  },{
    path: "/recipes/:recipeId",
    name: "Single Recipe",
    icon: "fas fa-utensils",
    component: <SingleRecipe/>,
    layout: "/main",
    bodyTypeAvailable: true,
     ut:0,
     pu: 0,
     hidden: true,
  },{
    path: "/recipes/edit/:recipeId",
    name: "Edit Recipe",
    icon: "fas fa-utensils",
    component: <EditRecipePage/>,
    layout: "/main",
    bodyTypeAvailable: true,
     ut:1,
     pu: 0,
     hidden: true,
  },{
    path: "/account",
    name: "My Account 2",
    icon: "fas fa-user",
    component: <MyAccount />,
    layout: "/main",
    bodyTypeAvailable: true
  },{
    path: "/comment/create",
    name: "Create comment",
    icon: "fas fa-user",
    component: <CommentRatingForm />,
    layout: "/main",
    bodyTypeAvailable: true,
    ut: 0,
    pu: 0,
    hidden:true,
  },
  // {
  //   path: "/account",
  //   name: "My Account 2",
  //   icon: "fas fa-user",
  //   component: <MyAccount />,
  //   layout: "/main",
  //   bodyTypeAvailable: true
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: <Icons />,
  //   layout: "/main",
  //   bodyTypeAvailable: true
  // },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/main",
    bodyTypeAvailable: true,
    hidden: true,
    ut: 0,
    pu: 0
  },
  {
    path: "/checkout/:id",
    name: "Payment",
    icon: "ni ni-single-02 text-yellow",
    component: <Payment/>,
    layout: "/main",
    bodyTypeAvailable: true,
    hidden: true,
    ut: 0,
    pu: 0
  },
  {
    path: "/success",
    name: "Success",
    icon: "ni ni-single-02 text-yellow",
    component: <SuccessMessage/>,
    layout: "/main",
    bodyTypeAvailable: true,
    hidden: true,
    ut: 0,
    pu: 0
  },

  {
    path: "/pricingplan",
    name: "Subscription Plans",
    icon: "fas fa-trophy text-yellow",
    component: <PricingPlan/>,
    layout: "/main",
    bodyTypeAvailable: true,
    ut: 0,
    pu: 0
  },
  {
    path: "/trainer",
    name: "Trainer",
    icon: "ni ni-single-02 text-blue",
    component: <Trainer/>,
    layout: "/main",
    bodyTypeAvailable: true,
    ut: 0,
    pu: 1
  },
  // {
  //   path: "/questionare",
  //   name: "Questionare",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: <Questionare />,
  //   layout: "/main",
  //   bodyTypeAvailable: false,
  //   ut: 0
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Tables />,
  //   layout: "/main",
  //   bodyTypeAvailable: true
  // },
  {
    path: "/workout/create",
    name: "Create workout",
    icon: "ni ni-bullet-list-67 text-red",
    component: <WorkoutVideoUploadPage/>,
    layout: "/main",
    bodyTypeAvailable: true,
    ut: 1,
    pu: 0
  }
];
export default routes;
