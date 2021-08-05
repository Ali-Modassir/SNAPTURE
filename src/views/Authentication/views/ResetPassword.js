import React from "react";

import RestPswdFromContainer from "../components/RestPswdFromContainer";
import classes from "../styles/Authentication.module.css";
import Brandlogo from "../../../assets/img/BrandLogo.png";

const ResetPassword = () => {
  return (
    <div className={classes.auth_container}>
      <div
        className={classes.auth_card}
        style={{ height: "70%", width: "550px" }}
      >
        <div
          className={classes.card_right}
          style={{ justifyContent: "center", width: "100%" }}
        >
          <img src={Brandlogo} alt="brandLogo" />
          <div className={classes.largeFont}>Reset Password</div>
          <br />
          <RestPswdFromContainer />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
