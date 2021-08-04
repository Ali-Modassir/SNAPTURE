import React from "react";
import classnames from "classnames";
import style from "../style/LeftSidebar.module.css";
import { NavLink } from "react-router-dom";
import BrandLogo from "../../../assets/img/BrandLogo.png";

const LeftSidebar = ({ routes, mobile }) => {
  const leftSidebarStyle = mobile
    ? {
        backgroundColor: mobile && "#242129",
        width: "300px",
        minHeight: "100vh",
        overflowY: "hidden",
      }
    : {
        width: "300px",
      };
  return (
    <div className={classnames(style.container)} style={leftSidebarStyle}>
      <div className={classnames(style.brandlogo)}>
        <img src={BrandLogo} alt="SNAPTURE" className={style.brandLogoImg} />
      </div>
      <div className={classnames(style.routes)}>
        {routes.map((route, key) => {
          return (
            <NavLink
              to={route.path}
              className={style.routes_links}
              activeClassName={style.active_route_links}
              key={key}
            >
              <div className={style.route}>
                <div className={style.routeLogo}>{route.icon}</div>
                <div className={style.routePath}>{route.name}</div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSidebar;
