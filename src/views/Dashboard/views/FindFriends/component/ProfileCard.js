import React, { useState } from "react";
import style from "../../../style/ProfileCard.module.css";
import { Avatar } from "@material-ui/core";
import { useHttpClient } from "../../../../../customHooks/httpHook";
import { toast } from "react-toastify";

const ProfileCard = ({
  profilePic,
  name,
  institute,
  email,
  followerId,
  userId,
  followers,
}) => {
  const set = new Set(followers);
  const { sendRequest, isLoading } = useHttpClient();
  const [following, setfollowing] = useState(set.has(userId));
  const followHandler = () => {
    setTimeout(() => {
      sendRequest(
        `${process.env.REACT_APP_BASE_URL}/auth/addFollower/${userId}=${followerId}`
      )
        .then((res) => {
          if (res.ok) {
            if (res.friend) {
              toast.success("Congrats!!...You made a friend", {
                position: "top-right",
              });
            }
            setfollowing(res.following);
          }
        })
        .catch((err) => console.log(err));
    }, 500);
  };
  return (
    <div className={style.profileCard}>
      <div className={style.profileImg}>
        <Avatar
          src={profilePic || "/broken-image.jpg"}
          alt="profilePic"
          style={{ width: "120px", height: "120px" }}
        />
      </div>
      <div className={style.name}>{name}</div>
      <div className={style.branch}>{email}</div>
      <button className={style.followBtn} onClick={followHandler}>
        {following ? "Following" : "Follow"}
      </button>

      <div className={style.profileStats}>
        <div className={style.stat}>
          <div className={style.number}>0</div>
          <div className={style.stateName}>POSTS</div>
        </div>
        <div className={style.stat}>
          <div className={style.number}>{set.size}</div>
          <div className={style.stateName}>FOLLOWERS</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
