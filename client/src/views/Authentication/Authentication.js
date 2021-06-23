import React from "react";

import classes from "./styles/Authentication.module.css";
//components
import FormContainer from "./components/FormContainer";

import AppleIcon from "@material-ui/icons/Apple";

const Authentication = () => {
  return (
    <div className={classes.auth_container}>
      <div className={classes.auth_card}>
        <div className={classes.card_left}>
          <h3>Any Image</h3>
        </div>
        <div className={classes.card_right}>
          <h1>BrandLogo</h1>
          <div className={classes.largeFont}>Login to Your Account</div>
          <div className={classes.smallFont}>Your Own Digital Campaign</div>
          <div className={classes.oauth_btns}>
            <button className={classes.oauthbtn}>Signin With Google</button>
            <button className={classes.oauthbtn}>
              <AppleIcon />
              Signin With Apple
            </button>
          </div>
          <div className={classes.smallFont}> --OR-- </div>
          <FormContainer />
          <div className={classes.smallFont}>
            Not a member yet? Register Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
