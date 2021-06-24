import React from "react";

import classes from "./styles/Authentication.module.css";
//components
import FormContainer from "./components/FormContainer";

import AuthHomePic from "../../assets/img/AuthHomePic.jpg";
import Brandlogo from "../../assets/img/BrandLogo.png";

import AppleIcon from "@material-ui/icons/Apple";
import GoogleIcon from "@material-ui/icons/Google";

const Authentication = () => {
  console.log(AuthHomePic);

  return (
    <div className={classes.auth_container}>
      <div className={classes.auth_card}>
        <div className={classes.card_left}>
          <img src={AuthHomePic} alt="AuthBrandPic" />
        </div>
        <div className={classes.card_right}>
          <img src={Brandlogo} alt="brandLogo" />
          <div className={classes.largeFont_top}>Login to Your Account</div>
          <div className={classes.smallFont}>Your Own Digital Campaign</div>
          <div className={classes.oauth_btns}>
            <button className={classes.oauth_btn}>
              <div className={classes.oauth_logo}>
                <GoogleIcon fontSize="large" />
              </div>
              <div className={classes.oauth_text}>Signin With Apple</div>
            </button>
            <button className={classes.oauth_btn}>
              <div className={classes.oauth_logo}>
                <AppleIcon fontSize="large" />
              </div>
              <div className={classes.oauth_text}>Signin With Google</div>
            </button>
          </div>
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
