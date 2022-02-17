import React from "react";
import classes from "../styles/FormContainer.module.css";
import { toast } from "react-toastify";
import { CircularProgress } from "@material-ui/core";
import { useHttpClient } from "../../../customHooks/httpHook";
import { useHistory } from "react-router-dom";

const ForgotPswdFormContainer = () => {
  const { sendRequest, isLoading } = useHttpClient();
  const history = useHistory();

  //formSubmit Handler
  const authFormSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setTimeout(() => {
      sendRequest(
        process.env.REACT_APP_BASE_URL + "/auth/email/forgot",
        "POST",
        JSON.stringify(Object.fromEntries(formData)),
        {
          "Content-Type": "application/json",
        }
      )
        .then((res) => {
          if (res.ok) {
            toast.success(res.message);
            history.push("/auth");
          } else {
            toast.warn(res.message);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong, Please try again");
        });
    }, 500);
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
        {isLoading ? (
          <CircularProgress style={{ color: "#c3073f" }} />
        ) : (
          <button type="submit" className={classes.auth_btn}>
            &gt;&gt;
          </button>
        )}
      </form>
    </div>
  );
};

export default ForgotPswdFormContainer;
