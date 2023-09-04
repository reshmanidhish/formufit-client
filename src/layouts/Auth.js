import React from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {Container, Row} from "reactstrap";

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import Register from "pages/RegisterPage/Register";
import Login from "pages/LoginPage/Login";

const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  return (
    <>
      <div className="main-cosntent" ref={mainContent}>
        <AuthNavbar />
        <div className="header bg-gradient-info py-3 py-lg-7">
        </div>
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/auth/login" replace />} />
            </Routes>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Auth;
