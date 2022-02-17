import React from "react";
import classes from "../styles/FormContainer.module.css";
import { toast } from "react-toastify";
import { CircularProgress } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";

//hook
import { useHttpClient } from "../../../customHooks/httpHook";

const RestPswdFromContainer = () => {
  const { sendRequest, isLoading } = useHttpClient();
  const history = useHistory();
  const { resetToken } = useParams();

  //formSubmit Handler
  const authFormSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setTimeout(() => {
      sendRequest(
        process.env.REACT_APP_BASE_URL + "/auth/email/reset/" + resetToken,
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
            type="password"
            placeholder="Enter New Password"
            name="password"
            className={classes.auth_input}
          />
        </div>
        <div className={classes.form_row}>
          <input
            type="password"
            placeholder="Retype New Password"
            name="confirmPassword"
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

export default RestPswdFromContainer;
