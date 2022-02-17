import React, { useState, useContext } from "react";
import style from "../../../style/ProfileForm.module.css";
import AddIcon from "@material-ui/icons/Add";
import { Avatar, CircularProgress } from "@material-ui/core";
import { AuthContext } from "../../../../../context/authContext";
import { useHttpClient } from "../../../../../customHooks/httpHook";
import { toast } from "react-toastify";

const ProfileForm = () => {
  const { userId } = useContext(AuthContext);
  const { sendRequest, isLoading } = useHttpClient();

  const profileFormSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("userId", userId);
    sendRequest(
      process.env.REACT_APP_BASE_URL + "/auth/profileUpdate",
      "POST",
      formData
    )
      .then((res) => {
        if (res.ok) {
          toast.success(res.message);
        } else {
          toast.warn(res.message);
        }
      })
      .catch((err) => {
        toast.error("Unable to update profile");
        console.log(err);
      });
  };
  const fileChangeHandler = (e) => setFile(e.target.files[0]);

  const [previewSrc, setPreviewSrc] = useState("");
  const [file, setFile] = useState(null);
  const fileReader = new FileReader();
  fileReader.onload = () => setPreviewSrc(fileReader.result);
  if (file) fileReader.readAsDataURL(file);

  return (
    <form onSubmit={profileFormSubmitHandler} className={style.container}>
      <input
        type="file"
        name="profilePic"
        accept=".png,.jpeg,.jpg"
        id="profilePicBtn"
        className={style.profile_input_file}
        onChange={fileChangeHandler}
      />
      <Avatar
        src={previewSrc || "/broken-image.jpg"}
        style={{
          height: "180px",
          width: "180px",
          backgroundColor: "inherit",
          color: "#4e4e50",
        }}
      />
      <label htmlFor="profilePicBtn" className={style.image_btn}>
        <AddIcon
          style={{
            color: "black",
            backgroundColor: "#950740",
            borderRadius: "50%",
            padding: "5px",
            cursor: "pointer",
          }}
        />
      </label>
      <div className={style.form_row}>
        <input
          type="text"
          name="userName"
          placeholder="@username"
          className={style.profile_input}
        />
      </div>
      <div className={style.form_row}></div>
      {isLoading ? (
        <CircularProgress style={{ color: "#c3073f" }} />
      ) : (
        <button type="submit" className={style.profile_btn}>
          Update
        </button>
      )}
    </form>
  );
};

export default ProfileForm;
