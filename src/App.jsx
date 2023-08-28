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

function App() {
    return (
        <div className="App">

            {/* <Navbar /> */}
            <Routes>
                {/* MainLayout contains many user pages*/}
                <Route path="/*" element={<MainLayout/>}/>

                {/* AdminLayout contains many auth pages*/}
                <Route path="/auth/*" element={<AuthLayout/>}/>

                <Route path="*" element={<Navigate to="/" replace/>}/>
                <Route path="/" element={<Welcome/>}/>

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
