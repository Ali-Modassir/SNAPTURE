import React, { useContext } from "react";
import { toast } from "react-toastify";
import { CircularProgress } from "@material-ui/core";

//hook
import { useHttpClient } from "../../../customHooks/httpHook";
//context
import { AuthContext } from "../../../context/authContext";

//css
import classes from "../styles/FormContainer.module.css";

const LoginFormContainer = () => {
  const auth = useContext(AuthContext);
  const { sendRequest, isLoading } = useHttpClient();

  //FormSubmitHandler
  const authFormSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setTimeout(() => {
      sendRequest(
        process.env.REACT_APP_BASE_URL + "/auth/login",
        "POST",
        JSON.stringify(Object.fromEntries(formData)),
        {
          "Content-Type": "application/json",
        }
      )
        .then((res) => {
          if (res.ok) {
            toast.success("Logged In");
            auth.login(
              res.userName,
              res.userEmail,
              res.userId,
              res.institute,
              res.token
            );
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
    <form onSubmit={authFormSubmitHandler} className={classes.form_container}>
      <div className={classes.inputWrapper}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={classes.auth_input}
        />
      </div>

      <div className={classes.inputWrapper}>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={classes.auth_input}
        />
      </div>
      {isLoading ? (
        <CircularProgress style={{ color: "#c3073f" }} />
      ) : (
        <div className={classes.inputWrapper}>
          <button type="submit" className={classes.auth_btn}>
            Login
          </button>
        </div>
      )}
    </form>
  );
};

export default LoginFormContainer;
