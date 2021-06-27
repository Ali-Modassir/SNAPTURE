import React from "react";

import ForgotPswdFormContainer from "../components/ForgotPswdFormContainer";
import Brandlogo from "../../../assets/img/BrandLogo.png";
import classes from "../styles/Authentication.module.css";

const ForgotPassword = () => {
  return (
    <div className={classes.auth_container}>
      <div className={classes.auth_card}>
        <div className={classes.card_right}>
          <img src={Brandlogo} alt="brandLogo" />
          <div className={classes.largeFont}>Forgot Password</div>
          <ForgotPswdFormContainer />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
