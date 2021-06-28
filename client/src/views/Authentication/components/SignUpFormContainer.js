import React from "react";

//css
import classes from "../styles/FormContainer.module.css";

const FormContainer = () => {
  //FormSubmitHandler
  const authFormSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(formData);
  };

  return (
    <div className={classes.form_container}>
      <form onSubmit={authFormSubmitHandler}>
        <div className={classes.form_row}>
          {/* <input
            type="text"
            name="firstName"
            placeholder="Name"
            className={classes.auth_input}
          /> */}
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
