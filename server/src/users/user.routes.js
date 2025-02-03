const express = require("express");
const router = express.Router();
const { AuthMiddleware } = require("./auth.middleware");

const {
  SignupUser,
  SignupOtpVerify,
  ResentOtpSignupUser,
  LoginUser,
  ForgotPasswordUser,
  ResetPasswordUser,
  VerifyOTPUser,
  LogoutUser,
  UserDashboard,
  ResentOtpForgotPasswordUser,
  UserVerfiedToken,
} = require("./users.controllers");

// Routes
router.post("/signup", SignupUser);
router.post("/signup-otp-verify", SignupOtpVerify);
router.post("/resend-otp-signup", ResentOtpSignupUser);
router.post("/login", LoginUser);

router.post("/forgot-password", ForgotPasswordUser);
router.post("/resend-otp", ResentOtpForgotPasswordUser);
router.post("/forgot-password-otp-verify", VerifyOTPUser);
router.post("/reset-password", ResetPasswordUser);

router.get("/refresh-token", AuthMiddleware, UserVerfiedToken);
router.get("/logout", AuthMiddleware, LogoutUser);
router.get("/dashboard", AuthMiddleware, UserDashboard);

module.exports = router;
