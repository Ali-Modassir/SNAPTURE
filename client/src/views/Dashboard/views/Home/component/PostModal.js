import React, { useState } from "react";
import style from "../../../style/PostModal.module.css";
import AddIcon from "@material-ui/icons/Add";
import { Avatar, Fade } from "@material-ui/core";

const PostModal = () => {
  const postSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
  };

  const [previewSrc, setPreviewSrc] = useState("");
  const [file, setFile] = useState(null);

  const fileChangeHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const fileReader = new FileReader();
  fileReader.onload = () => {
    setPreviewSrc(fileReader.result);
  };
  if (file) fileReader.readAsDataURL(file);

  return (
    <div className={style.container}>
      <form onSubmit={postSubmitHandler}>
        <div className={style.caption}>
          <div className={style.captionLabel}>ADD A CAPTION</div>
          <textarea
            className={style.caption_input}
            rows="3"
            cols="40"
            name="caption"
          ></textarea>
        </div>
        <div className={style.image}>
          <input
            type="file"
            name="profilePic"
            accept=".png,.jpeg,.jpg"
            id="profilePicBtn"
            className={style.image_file}
            onChange={fileChangeHandler}
          />
          <Avatar
            src={previewSrc || "/broken-image.jpg"}
            variant="square"
            style={{
              height: "150px",
              width: "300px",
              backgroundColor: "black",
              borderRadius: "20px",
            }}
          />
          <label htmlFor="profilePicBtn" className={style.image_btn}>
            <AddIcon
              fontSize="large"
              style={{
                color: "white",
                backgroundColor: "#171e27",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
          </label>
        </div>
        <button type="submit" className={style.addPostBtn}>
          ADD POST
        </button>
      </form>
    </div>
  );
};

export default PostModal;
