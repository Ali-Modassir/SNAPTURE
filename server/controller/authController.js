const jwt = require("jsonwebtoken");
const async = require("async");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const User = require("../models/User"); //Model
const HttpError = require("../misc/HttpError"); //Helper function for Handle error
const sendEmail = require("../config/nodemailer"); //nodemailer
const emailTemplates = require("../config/emailTemplates"); //nodemailer-email-templates

// handle errors
const handleErrors = (err) => {
  let errors = { email: "", password: "" };
  // incorrect credentials
  if (
    err.message === "incorrect email" ||
    err.message === "incorrect password"
  ) {
    return new HttpError("Credentials seem to be wrong.", 401);
  }

  // validation errors
  else if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  //Any unknown err
  else {
    return new HttpError(
      err.message || "Something went wrong, Signing up failed",
      500
    );
  }

  return errors;
};

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: maxAge,
  });
};

//SignUp Controller
module.exports.signup_post = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword)
      return res.json({ message: "Please Enter all details", ok: false });
    if (password != confirmPassword)
      return res.json({ message: "Passwords not matched", ok: false });
    const exsistingUser = await User.findOne({
      "local.email": email,
    });
    if (exsistingUser)
      return res.json({
        message: "User Already Registered, Please Login",
        ok: false,
      });

    const user = await new User({
      method: "local",
      local: { name, email, password },
    });
    await user.save(); //Saved-User-Data

    //Sending-Confirmation-Email
    await sendEmail(
      email,
      emailTemplates.confirmEmailTemp(user._id, user.local.name)
    );

    return res.status(201).json({
      message: "Email sent, Please check your inbox to confirm",
      ok: true,
    });
  } catch (err) {
    const errors = handleErrors(err);
    return next(errors);
  }
};

//Email Confirmation
module.exports.confirmEmail = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) return res.json({ message: "User Not found", ok: false });
    if (user.local.confirmed)
      res.json({ message: "Email Already Confirmed, Please Login", ok: false });
    await UserModel.User.findOneAndUpdate(
      { _id: user._id },
      {
        $set: {
          "local.confirmed": true,
        },
      }
    );
    const token = createToken(confirmedUser._id);
    return res.json({
      userId: confirmedUser._id,
      userName: confirmedUser.local.name,
      userEmail: confirmedUser.local.email,
      token: token,
      ok: true,
      message: "Email Confirmed, Account Successfully Created",
    });
  } catch (err) {
    const errors = handleErrors(err);
    return next(errors);
  }
};

//Login Controller
module.exports.login_post = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    if (user === "Incorrect Password!!!" || user === "Incorrect Email!!!") {
      return res.json({ ok: false, message: user });
    }
    if (!user.local.confirmed) {
      return res.status(403).json({
        message: "Email not Confirmed. Please check your email account",
        ok: false,
      });
    } else {
      const token = createToken(user._id);
      return res.status(201).json({
        userId: user._id,
        userName: user.local.name,
        userEmail: user.local.email,
        token,
        ok: true,
        message: "Logged In Successfully",
      });
    }
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    return next(errors);
  }
};

//Forgot password Controller
module.exports.forgotPassword = (req, res, next) => {
  async.waterfall([
    (done) => {
      crypto.randomBytes(20, (err, buf) => {
        var token = buf.toString("hex");
        done(err, token);
      });
    },
    function (token, done) {
      User.findOneAndUpdate(
        { "local.email": req.body.email },
        {
          $set: {
            "local.resetPasswordToken": token,
            "local.resetPasswordExpires": Date.now() + 3600000, //1 hour
          },
        },
        (err, user) => {
          if (!user) {
            return next(new HttpError("No user with that email exsists", 404));
          }
          done(err, token, user);
        }
      );
    },
    async (token, user, done) => {
      try {
        //Sending-Reset-Password-Email
        await sendEmail(
          user.local.email,
          emailTemplates.forgotPswdTemp(token, user.local.name)
        );

        return res.status(201).json({
          message: "Email Successfully Sent. Please check your email account",
          ok: true,
        });
      } catch (err) {
        const errors = handleErrors(err);
        return next(errors);
      }
    },
  ]);
};

//Reset Password
module.exports.resetPassword = async (req, res, next) => {
  const token = req.params.token;
  const pswd = req.body.password;
  const confpswd = req.body.confirmPassword;
  if (pswd !== confpswd) {
    return res.json({ message: "Password Not Matching" });
  }
  try {
    const hashPswd = await bcrypt.hash(pswd, 10);

    const user = await User.findOneAndUpdate(
      {
        "local.resetPasswordToken": token,
        "local.resetPasswordExpires": { $gt: Date.now() },
      },
      {
        $set: {
          "local.password": hashPswd,
          "local.confirmed": true,
          "local.resetPasswordToken": undefined,
          "local.resetPasswordExpires": undefined,
        },
      }
    );
    if (!user) {
      return next(
        new HttpError("Password reset token has expired or is invalid", 400)
      );
    } else {
      //Sending-Success-Email
      await sendEmail(
        user.local.email,
        emailTemplates.pswdChangeTemp(user.local.name, user.local.email)
      );

      res.json({
        message: "Password Successfully Changed",
        ok: true,
      });
    }
  } catch (error) {
    const errors = handleErrors(error);
    return next(errors);
  }
};

//get user_details_by_id
module.exports.getUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await UserModel.User.findById(id);
  if (user) {
    const jwttoken = createToken(id);
    const data = {
      userName: user.local.name,
      userEmail: user.local.email,
      userId: id,
      token: jwttoken,
    };
    res.json(data);
  } else {
    res.json({ message: "User Not found", ok: false });
  }
};
