import React, { useContext } from "react";
import style from "../style/Header.module.css";
import { AuthContext } from "../../../context/authContext";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  var headName;
  if (location.pathname.split("/")[2]) {
    headName = location.pathname.split("/")[2];
    headName = headName.toUpperCase();
    if (headName === "FINDFRIENDS") headName = "FIND FRIENDS";
  }
  const { userName } = useContext(AuthContext);
  return (
    <div className={style.container}>
      <div className={style.routeName}>{headName}</div>
      <div className={style.userName}>Bonjour !! , {userName}</div>
    </div>
  );
};

export default Header;
