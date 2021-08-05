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
            toast.success("Logged In", { position: "top-right" });
            console.log(res);
            auth.login(
              res.userName,
              res.userEmail,
              res.userId,
              res.institute,
              res.token
            );
          } else {
            toast.warn(res.message, { position: "top-right" });
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

export default LoginFormContainer;
