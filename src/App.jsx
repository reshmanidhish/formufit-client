import "./App.css";
import {Navigate, Route, Routes} from "react-router-dom";
import React from 'react';
import ProfilePage from "./pages/ProfilePage";
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
                {/* <Route
                    path="/profile"
                    element={
                        <IsPrivate>
                             <Profile />
                        </IsPrivate>
                    }
                /> */}
            </Routes>
        </div>
    );
}

export default App;
