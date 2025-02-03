const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports.sendForgotPasswordEmail = async (to, otp, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: "Forgot Password Assistance - OTP Code",
    html: generateOtpHtml(otp, name),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

const generateOtpHtml = (otp, name) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Forgot Password OTP</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            background-color: #ff6f61;
            color: white;
            padding: 15px 0;
            border-radius: 5px 5px 0 0;
          }
          .content {
            padding: 20px;
          }
          .otp-code {
            font-size: 28px;
            font-weight: bold;
            color: #ff6f61;
            text-align: center;
            margin: 20px auto;
            padding: 10px;
            background-color: #fff3f0;
            border-radius: 5px;
            width: fit-content;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            color: #888;
          }
          .btn-reset {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #ff6f61;
            color: white;
            text-decoration: none;
            font-size: 16px;
            border-radius: 5px;
            text-align: center;
          }
          .btn-reset:hover {
            background-color: #e65b53;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Forgot Password Assistance</h1>
          </div>
          <div class="content">
            <p>Hi ${name},</p>
            <p>We received a request to reset your password. Use the OTP below to proceed:</p>
            <div class="otp-code">${otp}</div>
            <p>If you did not request to reset your password, please ignore this email or contact support.</p>
            
          </div>
          <div class="footer">
            <p>If you have any questions, feel free to reach out to our support team.</p>
            <p>&copy; 2024 Your Company</p>
          </div>
        </div>
      </body>
    </html>
  `;
};
