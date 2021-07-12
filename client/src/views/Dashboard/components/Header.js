import React, { useContext } from "react";
import style from "../style/Header.module.css";
import { AuthContext } from "../../../context/authContext";

const Header = () => {
  const { userName } = useContext(AuthContext);
  return (
    <div className={style.container}>
      <div className={style.routeName}>DASHBOARD</div>
      <div className={style.userName}>Hy, {userName}!</div>
    </div>
  );
};

export default Header;
