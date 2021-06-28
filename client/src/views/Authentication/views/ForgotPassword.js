import React from "react";

import ForgotPswdFormContainer from "../components/ForgotPswdFormContainer";
import Brandlogo from "../../../assets/img/BrandLogo.png";
import classes from "../styles/Authentication.module.css";

const ForgotPassword = () => {
  return (
    <div className={classes.auth_container}>
      <div
        className={classes.auth_card}
        style={{ height: "60%", width: "550px" }}
      >
        <div
          className={classes.card_right}
          style={{ justifyContent: "center", width: "100%" }}
        >
          <img src={Brandlogo} alt="brandLogo" />
          <div className={classes.largeFont}>Forgot Password</div>
          <br />
          <ForgotPswdFormContainer />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
