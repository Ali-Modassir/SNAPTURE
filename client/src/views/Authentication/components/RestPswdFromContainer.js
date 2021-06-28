import React from "react";
import classes from "../styles/FormContainer.module.css";

const RestPswdFromContainer = () => {
  //formSubmit Handler
  const authFormSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
  };

  return (
    <div className={classes.form_container}>
      <form onSubmit={authFormSubmitHandler}>
        <div className={classes.form_row}>
          <input
            type="text"
            placeholder="Enter New Password"
            name="password"
            className={classes.auth_input}
          />
        </div>
        <div className={classes.form_row}>
          <input
            type="text"
            placeholder="Retype New Password"
            name="confirmPassword"
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

export default RestPswdFromContainer;
