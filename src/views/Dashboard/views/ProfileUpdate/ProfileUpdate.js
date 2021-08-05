import React from "react";
import ProfileForm from "./components/ProfileForm";
import style from "../../style/ProfileUpdate.module.css";
import MyPosts from "./components/MyPosts";

const ProfileUpdate = () => {
  return (
    <div className={style.container}>
      <div className={style.heading}>Update Profile</div>
      <ProfileForm />
      <br />
      <br />
      <div className={style.heading}>My Posts</div>
      <MyPosts />
    </div>
  );
};

export default ProfileUpdate;
