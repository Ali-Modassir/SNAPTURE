import React from "react";
import ProfileForm from "./components/ProfileForm";
import style from "../../style/ProfileUpdate.module.css";

const ProfileUpdate = () => {
  return (
    <div className={style.container}>
      <ProfileForm />
    </div>
  );
};

export default ProfileUpdate;
