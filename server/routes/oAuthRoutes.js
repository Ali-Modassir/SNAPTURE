const { Router } = require("express");
const passport = require("passport");

const router = Router();

//GOOGLE
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
//GOOGLE: Callback function after login
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  function (req, res) {
    let token = req.user._id;
    res.redirect(process.env.CLIENT_ORIGIN + "/auth/" + token);
  }
);

//MICROSOFT
router.get("/auth/microsoft", passport.authenticate("microsoft"));
router.get(
  "/auth/microsoft/callback",
  passport.authenticate("microsoft", { failureRedirect: "/", session: false }),
  function (req, res) {
    let token = req.user._id;
    // Successful authentication, redirect home.
    res.redirect(process.env.CLIENT_ORIGIN + "/auth/" + token);
  }
);

module.exports = router;
