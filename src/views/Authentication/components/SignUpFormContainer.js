import React from "react";
import { toast } from "react-toastify";
import { CircularProgress } from "@material-ui/core";

//hook
import { useHttpClient } from "../../../customHooks/httpHook";

//css
import classes from "../styles/FormContainer.module.css";

const FormContainer = () => {
  const { sendRequest, isLoading } = useHttpClient();

  //FormSubmitHandler
  const authFormSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setTimeout(() => {
      sendRequest(
        process.env.REACT_APP_BASE_URL + "/auth/signup",
        "POST",
        JSON.stringify(Object.fromEntries(formData)),
        {
          "Content-Type": "application/json",
        }
      )
        .then((res) => {
          console.log(res);
          if (res.ok) {
            toast.success(res.message, { position: toast.POSITION.TOP_RIGHT });
          } else {
            toast.warn(res.message, { position: toast.POSITION.TOP_RIGHT });
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong, Please try again", {
            position: "top-right",
          });
        });
    }, 500);
  };

  return (
    <div className={classes.form_container}>
      <form onSubmit={authFormSubmitHandler}>
        <div className={classes.form_row}>
          <input
            type="text"
            name="name"
            placeholder="Name"
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
          <input
            type="text"
            name="institute"
            placeholder="College/Institute"
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
            name="confirmPassword"
            placeholder="Repeat"
            className={classes.auth_input}
          />
        </div>
        {isLoading ? (
          <CircularProgress style={{ color: "orangered" }} />
        ) : (
          <button type="submit" className={classes.auth_btn}>
            &gt;&gt;
          </button>
        )}
      </form>
    </div>
  );
};

export default FormContainer;
