import FavoriteIcon from "@material-ui/icons/Favorite";
import React, { useState } from "react";
import style from "../../../style/PostCard.module.css";
import { Avatar } from "@material-ui/core";
import { useHttpClient } from "../../../../../customHooks/httpHook";

const PostCard = ({ props }) => {
  const { userName, imageUrl, caption, like, postId, userId } = props;
  var set = new Set(like);
  const [likeIds] = useState(set);
  const { sendRequest } = useHttpClient();
  const [liked, setLiked] = useState(likeIds.has(userId));

  const likeCounterHandler = () => {
    const data = {
      userId,
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
          console.log(res);
          if (res.ok) {
            if (liked) {
              likeIds.delete(userId);
              setLiked(false);
            } else if (!liked) {
              likeIds.add(userId);
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
            backgroundColor: "orangered",
            margin: "10px 10px 10px 25px",
          }}
        />
        <div className={style.profileName}>{userName}</div>
      </div>
      <img src={imageUrl} alt="post" className={style.image} />
      <div className={style.postCardDetails}>
        <div className={style.caption}>{caption}</div>
        <div className={style.like}>
          <FavoriteIcon
            style={{ color: liked ? "red" : "grey" }}
            fontSize="large"
            onClick={likeCounterHandler}
          />
          <div className={style.count}>{likeIds.size}</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
