import React, { useContext } from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import { AuthContext } from "../context/auth.context";

const Main = (props) => {
    const mainContent = React.useRef(null);
    const location = useLocation();
    
    const { user } = useContext(AuthContext);

    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    }, [location]);

    const getFilteredRoutes = (routes) => {
        return routes
        .filter(route => user?.bodyType ? route.bodyTypeAvailable : !route.bodyTypeAvailable)
    }

    const getRoutes = (routes) => {
        return getFilteredRoutes(routes)
        .filter(route => user.ut >= route.ut )
        .map((route, key) => {
            if (route.layout === "/main") {
                return (
                    <Route path={route.path} element={route.component} key={key} exact/>
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
                routes={getFilteredRoutes(routes)}
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
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
                <AdminFooter/>
            </div>
        </>
    );
};

export default Main;
