const jwt = require("jsonwebtoken");
const async = require("async");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const User = require("../models/User"); //Model
const Feedback = require("../models/Feedback");
const HttpError = require("../misc/HttpError"); //Helper function for Handle error
const sendEmail = require("../config/nodemailer"); //nodemailer
const emailTemplates = require("../config/emailTemplates"); //nodemailer-email-templates
const { v4: uuidv4 } = require("uuid");

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

//password validate
const validatePassword = (pswd) => {
  const pswdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return pswdRegex.test(pswd);
};

//Validate Password
const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

//SignUp Controller
module.exports.signup_post = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(404)
        .json({ message: "Please provide all details", ok: false });

    if (!validateEmail(email)) {
      return res
        .status(400)
        .json({ message: "Invalid Email Formal", ok: false });
    }

    if (!validatePassword(password)) {
      return res
        .status(400)
        .json({ message: "Invalid Password Format", ok: false });
    }

    const exsistingUser = await User.findOne({
      "local.email": email,
    });
    if (exsistingUser)
      return res.json({
        message: "User Already Registered, Please Login",
        ok: false,
      });

    const hashPswd = await bcrypt.hash(password, 10);

    const user = await new User({
      method: "local",
      local: { email, password: hashPswd },
    });

    await user.save(); //Saved-User-Data

    //Sending-Confirmation-Email
    await sendEmail(
      email,
      emailTemplates.confirmEmailTemp(user._id, user.local.email)
    );

    return res.status(201).json({
      message: "Email sent!!, Please verify your email to continue",
      ok: true,
    });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    return next(errors);
  }
};

//Email Confirmation
module.exports.confirmEmail = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, {
      $set: {
        "local.confirmed": true,
      },
    });
    if (user.local.confirmed) {
      return res.json({ message: "User already confirmed", ok: false });
    }
    const token = createToken(user._id);
    return res.json({
      userId: user._id,
      userName: user.local.userName,
      userEmail: user.local.email,
      institute: user.local.institute,
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
      return res.json({ ok: false, message: "Credentials seems to be wrong" });
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
        userName: user.local.userName,
        userEmail: user.local.email,
        institute: user.local.institute,
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
          emailTemplates.forgotPswdTemp(token, user.local.userName)
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
  try {
    const user = await User.findById(id);
    if (user) {
      const jwttoken = createToken(id);
      const data = {
        userName: user.local.userName,
        userEmail: user.local.email,
        userId: id,
        token: jwttoken,
        ok: true,
      };
      res.json(data);
    } else {
      res.json({ message: "User Not found", ok: false });
    }
  } catch (error) {
    console.log(error);
  }
};

//getting all users by institute
module.exports.getAllUsers = async (req, res) => {
  try {
    const { userId, institute } = req.body;
    const allUsers = await User.find();
    const reqDetails = [];
    let idx = 0;
    allUsers.forEach((user) => {
      if (user.local.institute != institute || user._id == userId) return;
      else {
        const data = {
          index: idx++,
          name: user.local.userName,
          email: user.local.email,
          institute: user.local.institute,
          followers: user.local.followers,
          profilePic: user.local.profilePic,
          userId: user._id,
        };
        reqDetails.push(data);
      }
    });
    return res.status(200).json({ users: reqDetails, ok: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong", ok: false });
  }
};

//add Follower Controller
module.exports.addFollower = async (req, res) => {
  let { query } = req.params;
  query = query.split("=");
  const userId = query[0];
  const personId = query[1];

  try {
    const user = await User.findById(userId);
    if (!user)
      return res.status(400).json({ message: "User not found", ok: false });
    const followingIdx = user.local.following.indexOf(personId);
    const friendIdx = user.local.friend.findIndex(
      (user) => user.friendId === personId
    );
    if (followingIdx != -1) {
      user.local.following.splice(followingIdx, 1);
      if (friendIdx != -1) {
        user.local.friend.splice(friendIdx, 1);
        const person = await User.findById(personId);
        const userFriendIdx = person.local.friend.findIndex(
          (user) => user.friendId === userId
        );
        person.local.friend.splice(userFriendIdx, 1);
        user.save();
        person.save();
        return res.json({
          message: "Unfollowed and Unfriend",
          following: false,
          friend: false,
          ok: true,
        });
      }
      user.save();
      return res.json({
        message: "Unfollowed",
        id: true,
        following: false,
      });
    }

    const person = await User.findById(personId);
    if (!person)
      return res.status(400).json({ message: "User not found", ok: false });

    user.local.following.push(personId);
    person.local.followers.push(userId);
    var isFriend = false;
    if (user.local.followers.indexOf(personId) != -1) {
      const conversationId = uuidv4();
      user.local.friend.push({
        conversationId,
        friendId: personId,
        friendName: person.local.userName,
        friendProfilePic: person.local.profilePic,
      });
      person.local.friend.push({
        conversationId,
        friendId: userId,
        friendName: user.local.userName,
        friendProfilePic: user.local.profilePic,
      });
      isFriend = true;
    }
    user.save();
    person.save();
    if (isFriend) {
      return res.json({
        message: "Friend",
        ok: true,
        friend: true,
        following: true,
      });
    } else {
      return res.json({
        message: "Followed",
        ok: true,
        following: true,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong", ok: false });
  }
};

//getting all friend of a user
module.exports.getAllFriends = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) res.status(400).json({ message: "User Not found", ok: false });
    return res.json({ friends: user.local.friend, ok: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong", ok: false });
  }
};

//feedback from users
module.exports.getFeedback = async (req, res) => {
  const { name, email, description } = req.body;
  if (!name || !email || !description)
    return res.json({ message: "Fill all Inputs", ok: false });
  try {
    await new Feedback({
      name,
      email,
      description,
    });
    await sendEmail(
      process.env.MAIL_USER,
      emailTemplates.feedbackTemplate(name, email, description)
    );
    return res.json({ message: "Feedback Submitted", ok: true });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Unable to send Feedback", ok: false });
  }
};
