import FavoriteIcon from "@material-ui/icons/Favorite";
import React from "react";
import style from "../../../style/PostCard.module.css";
import { Avatar } from "@material-ui/core";

const PostCard = ({ imgSrc }) => {
  return (
    <div className={style.container}>
      <div className={style.profileDetails}>
        <Avatar
          style={{
            backgroundColor: "orangered",
            margin: "10px 10px 10px 25px",
          }}
        />
        <div className={style.profileName}>Modassir</div>
      </div>
      <img src={imgSrc} alt="post" className={style.image} />
      <div className={style.postCardDetails}>
        <div className={style.caption}>
          Hii, This is Modassir, I'm on PnM mall jamshedpur
        </div>
        <div className={style.like}>
          <FavoriteIcon style={{ color: "red" }} fontSize="large" />
          <div className={style.count}>1.1K</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
