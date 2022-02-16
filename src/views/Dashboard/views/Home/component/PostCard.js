import FavoriteIcon from "@material-ui/icons/Favorite";
import React, { useState, useContext } from "react";
import style from "../../../style/PostCard.module.css";
import { Avatar } from "@material-ui/core";
import { useHttpClient } from "../../../../../customHooks/httpHook";
import { AuthContext } from "../../../../../context/authContext";
import moment from "moment";

const PostCard = ({ props }) => {
  const { userName, imageUrl, caption, like, postId, userId, uploadDate } =
    props;
  const auth = useContext(AuthContext);
  const userLikedId = auth.userId;
  var set = new Set(like);
  const [likeIds] = useState(set);
  const { sendRequest } = useHttpClient();
  const [liked, setLiked] = useState(likeIds.has(userLikedId));

  const date = moment(uploadDate).fromNow();

  const likeCounterHandler = () => {
    const data = {
      userId,
      userLikedId,
      postId,
      type: liked,
    };
    setTimeout(() => {
      sendRequest(
        process.env.REACT_APP_BASE_URL + "/post/like",
        "POST",
        JSON.stringify(data),
        {
          "Content-Type": "application/json",
        }
      )
        .then((res) => {
          if (res.ok) {
            if (liked) {
              likeIds.delete(userLikedId);
              setLiked(false);
            } else if (!liked) {
              likeIds.add(userLikedId);
              setLiked(true);
            }
          }
        })
        .catch((err) => console.log(err));
    }, 500);
  };

  return (
    <div className={style.container}>
      <div className={style.profileDetails}>
        <Avatar
          style={{
            backgroundColor: "#950740",
            margin: "10px 8px 10px 10px",
          }}
        />
        <div className={style.profileName}>{userName}</div>
      </div>
      <img src={imageUrl} alt="post" className={style.image} />
      <div className={style.postCardDetails}>
        <div className={style.caption}>{caption}</div>
        <div className={style.like}>
          <FavoriteIcon
            style={{ color: liked ? "#C3073F" : "#4e4e50", cursor: "pointer" }}
            onClick={likeCounterHandler}
          />
          <div className={style.count}>{likeIds.size}</div>
          <div className={style.time}>{date}</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
