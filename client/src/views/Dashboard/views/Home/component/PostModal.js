import React, { useState, useContext } from "react";
import style from "../../../style/PostModal.module.css";
import AddIcon from "@material-ui/icons/Add";
import { Avatar, CircularProgress } from "@material-ui/core";
import { AuthContext } from "../../../../../context/authContext";
import { useHttpClient } from "../../../../../customHooks/httpHook";
import { toast } from "react-toastify";

const PostModal = ({ mobile }) => {
  const auth = useContext(AuthContext);
  const { sendRequest, isLoading } = useHttpClient();

  const postSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("userId", auth.userId);
    formData.append("userName", auth.userName);
    formData.append("userEmail", auth.userEmail);
    setTimeout(() => {
      sendRequest(
        process.env.REACT_APP_BASE_URL + "/post/createPost",
        "POST",
        formData
      )
        .then((res) => {
          if (res.ok) toast.success(res.message, { position: "top-right" });
          else toast.warning(res.message, { position: "top-right" });
          console.log(res);
        })
        .catch((err) => {
          toast.error("Something went wrong,Please try again", {
            position: "top-right",
          });
          console.log(err);
        });
    }, 500);
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
    <div className={style.container} style={{ margin: mobile && "10px" }}>
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
            name="file"
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
        {isLoading ? (
          <CircularProgress />
        ) : (
          <button type="submit" className={style.addPostBtn}>
            ADD POST
          </button>
        )}
      </form>
    </div>
  );
};

export default PostModal;
