import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import MainLayout from "./layouts/Main";
import AuthLayout from "./layouts/Auth";
import Welcome from "./pages/Welcome";
import Questionare from "pages/QuestionarePage";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        {/* MainLayout contains many user pages*/}
        <Route
          path="/*"
          element={
            <IsPrivate>
              <MainLayout />
            </IsPrivate>
          }
        />
        <Route
          path="/questionare"
          element={
            <IsPrivate path="/questionare">
              <Questionare />
            </IsPrivate>
          }
        />

        {/* AdminLayout contains many auth pages*/}
        <Route
          path="/auth/*"
          element={
            <IsAnon>
              <AuthLayout />
            </IsAnon>
          }
        />

        <Route
          path="/"
          element={
            <IsAnon>
              <Welcome />
            </IsAnon>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
