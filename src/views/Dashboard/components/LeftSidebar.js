import React from "react";
import classnames from "classnames";
import style from "../style/LeftSidebar.module.css";
import { NavLink } from "react-router-dom";

const LeftSidebar = ({ routes, mobile }) => {
  return (
    <div
      className={classnames(style.container)}
      style={{ backgroundColor: mobile && "purple", width: "300px" }}
    >
      <div className={classnames(style.brandlogo)}>SNAPTURE</div>
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
