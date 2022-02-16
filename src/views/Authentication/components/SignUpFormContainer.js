import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { CircularProgress } from "@material-ui/core";

//hook
import { useHttpClient } from "../../../customHooks/httpHook";

//css
import classes from "../styles/FormContainer.module.css";

const FormContainer = () => {
  const { sendRequest, isLoading } = useHttpClient();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [emailFormatError, setEmailFrmtErr] = useState(null);
  const [pswdFrmtErr, setPswdFrmtErr] = useState(null);

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  //password validate
  const validatePassword = (pswd) => {
    const pswdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return pswdRegex.test(pswd);
  };

  useEffect(() => {
    if (email === null) return;
    if (!validateEmail(email)) {
      setEmailFrmtErr("Invalid Email Address");
    } else setEmailFrmtErr(null);
  }, [email]);

  useEffect(() => {
    if (password === null) return;
    if (!validatePassword(password)) {
      setPswdFrmtErr(
        "Min 8 letter password, with at least a symbol, upper and lower case letters and a number"
      );
    } else setPswdFrmtErr(null);
  }, [password]);

  //FormSubmitHandler
  const authFormSubmitHandler = (e) => {
    e.preventDefault();
    if (pswdFrmtErr || emailFormatError) {
      toast.warn("Invalid Inputs");
      return;
    }
    const data = JSON.stringify({ email, password });

    setTimeout(() => {
      sendRequest(
        process.env.REACT_APP_BASE_URL + "/auth/signup",
        "POST",
        data,
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
      <div className={classes.inputWrapper}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={classes.auth_input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>{emailFormatError}</label>
      </div>
      <div className={classes.inputWrapper}>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={classes.auth_input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>{pswdFrmtErr}</label>
      </div>
      {isLoading ? (
        <CircularProgress style={{ color: "orangered" }} />
      ) : (
        <div className={classes.inputWrapper}>
          <button
            type="submit"
            onClick={authFormSubmitHandler}
            className={classes.auth_btn}
          >
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default FormContainer;
