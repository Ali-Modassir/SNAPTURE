const { Router } = require("express");

const authController = require("../controller/authController");

const router = Router();

//routes
router.post("/signup", authController.signup_post); //SignUpPOST
router.post("/login", authController.login_post); //LoginPOST
router.post("/email/forgot", authController.forgotPassword); //Getting Email from client for forgot password
router.post("/email/reset/:token", authController.resetPassword); //Getting passwords and confirm passwords for password rest
router.get("/google/:id", authController.getUser); //getting userBy id ;
router.get("/email/confirm/:id", authController.confirmEmail); //For Confirmation of email

module.exports = router;
