import React, { useState } from "react";
import classes from "../styles/Authentication.module.css";
//components
import SignUpFormContainer from "../components/SignUpFormContainer";
import LoginFormContainer from "../components/LoginFormContainer";

import Brandlogo from "../../../assets/img/BrandLogo.png";

import GoogleIcon from "../../../assets/icons/google.gif";
import MicrosoftIcon from "../../../assets/icons/microsoft.gif";

const Authentication = () => {
  const [authType, setAuthType] = useState("signin");

  return (
    <div className={classes.auth_container}>
      <div className={classes.stars}></div>
      <div className={classes.stars2}></div>
      <div className={classes.stars3}></div>
      <div className={classes.auth_card}>
        <div className={classes.card_left}>
          <div className={classes.card_left_heading}>WELCOME TO</div>
          <img
            src={Brandlogo}
            alt="brandLogo"
            className={classes.brandlogo_left}
          />
        </div>
        <div className={classes.card_right}>
          <img src={Brandlogo} alt="brandLogo" className={classes.brandlogo} />
          <div className={classes.largeFont_top}>Login to Your Account</div>
          <div className={classes.smallFont}>Your Own Digital Campaign</div>
          <div className={classes.oauth_btns}>
            <a
              href={`${process.env.REACT_APP_SERVER_URL}/auth/google`}
              style={{
                textDecoration: "none",
              }}
            >
              <button className={classes.oauth_btn}>
                <div className={classes.oauth_logo}>
                  <img
                    src={GoogleIcon}
                    alt="Continue with Google"
                    className={classes.svgIcons}
                  />
                </div>
                <div className={classes.oauth_text}>Continue With Google</div>
              </button>
            </a>
            <a
              href={`${process.env.REACT_APP_SERVER_URL}/auth/microsoft`}
              style={{
                textDecoration: "none",
              }}
            >
              <button className={classes.oauth_btn}>
                <div className={classes.oauth_logo}>
                  <img
                    src={MicrosoftIcon}
                    alt="Continue with Microsoft"
                    className={classes.svgIcons_google}
                  />
                </div>
                <div className={classes.oauth_text}>
                  Continue With Microsoft
                </div>
              </button>
            </a>
          </div>
          {authType === "signin" ? (
            <LoginFormContainer />
          ) : (
            <SignUpFormContainer />
          )}
          <div className={classes.authfooter}>
            {authType === "signin" ? (
              <div className={classes.smallFont}>
                Not a member yet ?{" "}
                <p
                  className={classes.oauth_p}
                  onClick={() => setAuthType("signup")}
                >
                  Register Now
                </p>
              </div>
            ) : (
              <div className={classes.smallFont}>
                Already Registered ?{" "}
                <p
                  className={classes.oauth_p}
                  onClick={() => setAuthType("signin")}
                >
                  Login
                </p>
              </div>
            )}
            <div className={classes.smallFont}>
              <a href="/auth/forgotPassword" className={classes.link}>
                Forgot Password ?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
