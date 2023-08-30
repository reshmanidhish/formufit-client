import "./App.css";
import {Navigate, Route, Routes} from "react-router-dom";
import React, {useState} from 'react';
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import MainLayout from "./layouts/Main";
import AuthLayout from "./layouts/Auth";
import Welcome from "./pages/Welcome";
import CreateRecipePage from "./pages/CreateRecipePage"
import AllRecipes from "pages/AllRecipesPage";
import Login from "views/examples/Login";
import Register from "views/examples/Register";

function App() {
    return (
        <div className="App">

            {/* <Navbar /> */}
            <Routes>
                {/* MainLayout contains many user pages*/}
                <Route path="/*" 
                        element={
                            <IsPrivate>
                                <MainLayout/>
                            </IsPrivate>
                }/>

                {/* AdminLayout contains many auth pages*/}
                <Route path="/auth/*" 
                        element={
                            <IsAnon>
                                <AuthLayout/>
                            </IsAnon>
                        }
                />

                <Route path="/" 
                        element={
                            <IsAnon>
                                <Welcome/>
                            </IsAnon>
                        }
                />
               

                <Route path="*" element={<Navigate to="/" replace/>}/>
                

                {/*The below code is from IronLauncher which we will be using it later for Auth Guard (page protection)*/}
                <Route
                    path="/profile"
                    element={
                        <IsPrivate>
                            <ProfilePage/>
                        </IsPrivate>
                    }
                />

                <Route
                    path="/signup"
                    element={
                        <IsAnon>
                            <SignupPage/>
                        </IsAnon>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <IsAnon>
                            <LoginPage/>
                        </IsAnon>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
