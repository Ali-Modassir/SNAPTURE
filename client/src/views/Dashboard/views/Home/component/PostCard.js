import FavoriteIcon from "@material-ui/icons/Favorite";
import React from "react";
import style from "../../../style/PostCard.module.css";

const PostCard = ({ imgSrc }) => {
  return (
    <div className={style.container}>
      <img src={imgSrc} alt="post" className={style.image} />
      <div className={style.postCardDetails}>
        <div className={style.like}>
          <FavoriteIcon />
          <div className={style.count}>1.1K</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
