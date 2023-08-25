import React from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

const Admin = (props) => {
    const mainContent = React.useRef(null);
    const location = useLocation();

    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    }, [location]);

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route path={prop.path} element={prop.component} key={key} exact/>
                );
            } else {
                return null;
            }
        });
    };

    const getBrandText = (path) => {
        for (let i = 0; i < routes.length; i++) {
            if (
                props?.location?.pathname.indexOf(routes[i].layout + routes[i].path) !==
                -1
            ) {
                return routes[i].name;
            }
        }
        return "Brand";
    };

    return (
        <>
            <Sidebar
                {...props}
                routes={routes}
                logo={{
                    innerLink: "/admin/index",
                    imgSrc: require("../assets/img/brand/formufit1.png"),
                    imgAlt: "...",
                }}
            />
            <AdminNavbar
                {...props}
                brandText={getBrandText(props?.location?.pathname)}
            />
            <div className="main-content" ref={mainContent}>
                <Routes>
                    {getRoutes(routes)}
                    <Route path="*" element={<Navigate to="/admin/index" replace/>}/>
                </Routes>
                <AdminFooter/>
            </div>
        </>
    );
};

export default Admin;
