import React from "react";
import style from "../../style/Home.module.css";
import Posts from "./component/Posts";
import News from "./component/News";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.postContainer}>
        <div className={style.heading}>Trendy Posts</div>
        <div className={style.posts}>
          <Posts />
        </div>
        <div className={style.heading}>FEED</div>
        <div className={style.news}>
          <News />
        </div>
      </div>
    </div>
  );
};

export default Home;
