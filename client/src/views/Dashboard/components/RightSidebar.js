import React from "react";
import style from "../style/RightSidebar.module.css";
import PersonImg from "../../../assets/img/PersonImg.webp";

const RightSidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.profileCard}>
        <div className={style.profileImg}>
          <img src={PersonImg} alt="profilePic" />
        </div>
        <div className={style.name}>Modassir Ali</div>
        <div className={style.branch}>PIE</div>

        <button className={style.updateProfileBtn}>Update Profile</button>

        <div className={style.profileStats}>
          <div className={style.stat}>
            <div className={style.number}>1.1K</div>
            <div className={style.stateName}>POSTS</div>
          </div>
          <div className={style.stat}>
            <div className={style.number}>21.3K</div>
            <div className={style.stateName}>HITS</div>
          </div>
        </div>
      </div>
      <div className={style.createPost}>
        <button className={style.createPostBtn}>CREATE POST</button>
      </div>
    </div>
  );
};

export default RightSidebar;
