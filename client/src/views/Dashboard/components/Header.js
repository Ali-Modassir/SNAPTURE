import React from "react";
import style from "../style/Header.module.css";
const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.routeName}>DASHBOARD</div>
      <div className={style.userName}>Hy, Modassir!</div>
    </div>
  );
};

export default Header;
