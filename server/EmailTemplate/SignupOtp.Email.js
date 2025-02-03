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

module.exports.sendOtpEmail = async (to, otp, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: "OTP Verification Code",
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
        <title>OTP Verification</title>
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
            background-color: #007bff;
            color: white;
            padding: 10px 0;
          }
          .content {
            padding: 20px;
          }
          .otp-code {
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
            text-align: center;
            margin-top: 20px;
            padding: 10px;
            background-color: #e0f7fa;
            border-radius: 5px;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            color: #888;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Signup Otp Verification</h1>
          </div>
          <div class="content">
            <p>Hello ${name},</p>  <!-- Personalized greeting with name -->
            <p>We received a request to verify your identity. Your OTP is:</p>
            <div class="otp-code">${otp}</div>
            <p>This OTP is valid for the next 10 minutes. If you did not request this, please ignore this email.</p>
          </div>
          <div class="footer">
            <p>Thank you for using our service!</p>
            <p>&copy; 2024 Your Company</p>
          </div>
        </div>
      </body>
    </html>
  `;
};
