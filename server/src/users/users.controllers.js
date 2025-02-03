const TryCatch = require("../../config/Try.catch");
const UserModel = require("./users.model");
const { AccessToken, RefreshToken, Otp } = require("../../config/Token");
const { sendOtpEmail } = require("../../EmailTemplate/SignupOtp.Email");
const {
  sendForgotPasswordEmail,
} = require("../../EmailTemplate/forgotPasswordOtp");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SignupUser = TryCatch(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ message: "Name is required", success: false });
  }

  if (!email) {
    return res
      .status(400)
      .json({ message: "Email is required", success: false });
  }

  if (!password) {
    return res
      .status(400)
      .json({ message: "Password is required", success: false });
  }

  const userExits = await UserModel.findOne({ email });

  if (userExits) {
    return res
      .status(400)
      .json({ message: "Email already exists", success: false });
  }

  const user = new UserModel({ name, email, password });

  if (!user.isVerified) {
    const otp = await Otp();
    const expirationTime = Date.now() + 10 * 60 * 1000;

    await sendOtpEmail(user.email, otp, user.name);
    user.signup_otp = otp;
    user.signup_otp_expiry = expirationTime;
  }

  await user.save();

  return res.status(201).json({
    message: "OTP Sent to Your Email",
    success: true,
  });
});

const SignupOtpVerify = TryCatch(async (req, res) => {
  const { email, otp } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ message: "Email is required", success: false });
  }

  if (!otp) {
    return res.status(400).json({ message: "OTP is required", success: false });
  }

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found", success: false });
  }

  if (user.signup_otp !== otp) {
    return res.status(400).json({ message: "Invalid OTP", success: false });
  }

  if (user.signup_otp_expiry < Date.now()) {
    return res.status(400).json({ message: "OTP expired", success: false });
  }

  user.isVerified = true;
  user.signup_otp = null;
  user.signup_otp_expiry = null;

  const accessToken = await AccessToken({ id: user._id });
  const refreshToken = await RefreshToken({ id: user._id });

  user.refreshToken = refreshToken;

  const cookiesOptions = {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 1000 * 24 * 30,
    sameSite: "lax",
  };

  res.cookie("accessToken", accessToken, cookiesOptions);
  res.cookie("refreshToken", refreshToken, cookiesOptions);

  await user.save();

  return res.status(201).json({
    message: "Signup Successful",
    success: true,
  });
});

const ResentOtpSignupUser = TryCatch(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ message: "Email is required", success: false });
  }

  const otp = await Otp();
  const expirationTime = Date.now() + 10 * 60 * 1000;

  const user = await UserModel.findOneAndUpdate(
    { email },
    {
      signup_otp: otp,
      signup_otp_expiry: expirationTime,
    },
    { new: true }
  );

  if (!user) {
    return res.status(400).json({ message: "User not found", success: false });
  }

  // Send OTP email
  await sendOtpEmail(user.email, otp, user.name);

  return res.status(201).json({
    message: "OTP Sent to Your Email",
    success: true,
  });
});

const LoginUser = TryCatch(async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ message: "Email is required", success: false });
  }

  if (!password) {
    return res
      .status(400)
      .json({ message: "Password is required", success: false });
  }

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found", success: false });
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res
      .status(400)
      .json({ message: "Invalid credentials", success: false });
  }

  if (user.status === "blocked") {
    return res.status(400).json({
      message: "Your account is blocked please contact admin",
      success: false,
    });
  }

  if (user.status === "Inactive") {
    return res.status(400).json({
      message: "Your account is Inactive please contact admin",
      success: false,
    });
  }

  if (!user.isVerified) {
    return res.status(400).json({
      message: "Your account is not verified please contact admin",
      success: false,
    });
  }

  const accessToken = await AccessToken({ id: user._id });
  const refreshToken = await RefreshToken({ id: user._id });
  user.refreshToken = refreshToken;

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  await user.save();
  return res.status(200).json({
    message: "Login successful",
    accessToken,
    refreshToken,
    success: true,
  });
});

const ForgotPasswordUser = TryCatch(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ message: "Email is required", success: false });
  }

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found", success: false });
  }

  if (user.isVerified) {
    const otp = await Otp();
    const expirationTime = Date.now() + 10 * 60 * 1000;
    await sendForgotPasswordEmail(user.email, otp, user.name);
    user.forgot_password_otp = otp;
    user.forgot_password_expiry = expirationTime;

    await user.save();
  }

  return res.status(200).json({
    message: "OTP sent successfully",
    success: true,
  });
});

const VerifyOTPUser = TryCatch(async (req, res) => {
  const { email, otp } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ message: "Email is required", success: false });
  }

  if (!otp) {
    return res.status(400).json({ message: "OTP is required", success: false });
  }

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found", success: false });
  }

  if (user.forgot_password_otp !== otp) {
    return res.status(400).json({ message: "Invalid OTP", success: false });
  }

  if (Date.now() > user.forgot_password_expiry) {
    return res
      .status(400)
      .json({ message: "OTP expired Please resend your otp", success: false });
  }

  return res.status(201).json({
    message: "OTP verified successfully",
    success: true,
  });
});

const ResentOtpForgotPasswordUser = TryCatch(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ message: "Email is required", success: false });
  }

  const otp = await Otp();
  const expirationTime = Date.now() + 10 * 60 * 1000;

  const user = await UserModel.findOneAndUpdate(
    { email },
    {
      forgot_password_otp: otp,
      forgot_password_expiry: expirationTime,
    },
    { new: true }
  );

  if (!user) {
    return res.status(400).json({ message: "User not found", success: false });
  }

  // Send OTP email
  await sendForgotPasswordEmail(user.email, otp, user.name);

  return res.status(201).json({
    message: "OTP Sent to Your Email",
    success: true,
  });
});

const ResetPasswordUser = TryCatch(async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ message: "Email is required", success: false });
  }

  if (!password) {
    return res
      .status(400)
      .json({ message: " Password are required", success: false });
  }

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found", success: false });
  }

  user.password = password;
  user.forgot_password_otp = null;
  user.forgot_password_expiry = null;

  await user.save();

  return res.status(201).json({
    message: "Password reset successful",
    success: true,
  });
});

const UserVerfiedToken = TryCatch(async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).json({ message: "Unauthorized", success: false });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await UserModel.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }

    // Generate new access token
    const newAccessToken = await AccessToken({ id: user._id });

    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Token verified successfully",
    });
  } catch (error) {
    return res.status(401).json({ message: "Invalid token", success: false });
  }
});

const LogoutUser = TryCatch(async (req, res) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: "Unauthorized", success: false });
  }

  // Clear cookies properly
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: true, // Change to true if using HTTPS
    sameSite: "None",
  });

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true, // Change to true if using HTTPS
    sameSite: "None",
  });

  return res.status(200).json({
    message: "Logout successful",
    success: true,
  });
});

const UserDashboard = TryCatch(async (req, res) => {
  res.send("dashboard");
});

module.exports = {
  SignupUser,
  SignupOtpVerify,
  ResentOtpSignupUser,
  ResentOtpForgotPasswordUser,
  LoginUser,
  ForgotPasswordUser,
  ResetPasswordUser,
  VerifyOTPUser,
  UserVerfiedToken,
  LogoutUser,
  UserDashboard,
};
