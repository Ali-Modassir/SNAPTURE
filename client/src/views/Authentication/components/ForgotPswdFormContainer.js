import React from "react";
import classes from "../styles/FormContainer.module.css";

const ForgotPswdFormContainer = () => {
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
            type="email"
            name="email"
            placeholder="Email"
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

export default ForgotPswdFormContainer;
