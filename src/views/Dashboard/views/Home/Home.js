import React, { useContext } from "react";
import style from "../../style/Home.module.css";
import Posts from "./component/Posts";
import News from "./component/News";
import { AuthContext } from "../../../../context/authContext";

const Home = () => {
  const { institute } = useContext(AuthContext);

  return (
    <div className={style.container}>
      <div className={style.postContainer}>
        <div className={style.heading}>Trendy Posts in {institute}</div>
        <div className={style.posts}>
          <Posts />
        </div>
        <div className={style.heading}>NEWS FEED</div>
        <div className={style.news}>
          <News />
        </div>
      </div>
    </div>
  );
};

export default Home;
