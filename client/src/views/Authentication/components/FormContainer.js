import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Avatar } from "@material-ui/core";

//css
import classes from "../styles/FormContainer.module.css";

const FormContainer = () => {
  //FormSubmitHandler
  const authFormSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(formData);
  };

  const [previewSrc, setPreviewSrc] = useState("");
  const [file, setFile] = useState(null);

  // const fileReader = new FileReader();
  // fileReader.onload = () => {
  //   setPreviewSrc(fileReader.result);
  // };
  // fileReader.readAsDataURL(file);

  return (
    <div>
      <form onSubmit={authFormSubmitHandler}>
        <input
          type="file"
          name="profilePic"
          accept=".png,.jpeg,.jpg"
          id="profilePicBtn"
          className={classes.auth_input_file}
        />
        {previewSrc ? (
          <div className={classes.image_preview}>
            <img
              className={classes.preview_image}
              src={previewSrc}
              alt="Preview"
            />
          </div>
        ) : (
          <Avatar
            src="/broken-image.jpg"
            style={{
              height: "110px",
              width: "110px",
              backgroundColor: "black",
            }}
          />
        )}
        <label htmlFor="profilePicBtn" className={classes.image_btn}>
          <AddIcon
            style={{
              color: "white",
              backgroundColor: "#171e27",
              borderRadius: "50%",
              padding: "5px",
            }}
          />
        </label>
        <div className={classes.form_row}>
          <input
            type="text"
            name="firstName"
            placeholder="Name"
            className={classes.auth_input}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={classes.auth_input}
          />
        </div>
        <div className={classes.form_row}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={classes.auth_input}
          />
        </div>
        <div className={classes.form_row}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={classes.auth_input}
          />
          <input
            type="password"
            name="confirm_password"
            placeholder="Repeat"
            className={classes.auth_input}
          />
        </div>
        <button type="submit" className={classes.auth_btn}>
          &gt;&gt;
        </button>
      </form>
    </div>
  );
};

export default FormContainer;
