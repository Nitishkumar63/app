import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router";
import { useContext } from "react";
import { MyContext } from "../../App";
const SignupOtpVerification = () => {
  const { setIsLogin } = useContext(MyContext);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendCountdown, setResendCountdown] = useState(30); // Resend cooldown in seconds
  const [isOtpVerified, setIsOtpVerified] = useState(false); // OTP verified status
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      navigate("/signup");
    }
  }, [email, navigate]);

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(
        () => setResendCountdown(resendCountdown - 1),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [resendCountdown]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (/[^0-9]/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput && nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput && prevInput.focus();
    }
  };

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    const userOtp = otp.join("");
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/users/signup-otp-verify`,
        { otp: userOtp, email },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data?.message);
      setIsOtpVerified(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);

      setOtp(["", "", "", "", "", ""]);
      setIsLogin(true);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  const handleResendOtp = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/users/resend-otp-signup`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data?.message || "OTP resent successfully!");
      setResendCountdown(30); // Reset countdown
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to resend OTP!");
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");
  return (
    <div className="flex items-center justify-center py-20 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <div className="flex justify-center mb-6">
          <img
            src={"/assets/download.jpeg"}
            width={170}
            height={50}
            alt="logoImage"
          />
        </div>

        {/* OTP Verification Form */}
        <div className="mt-6">
          <h3 className="text-xl font-medium text-gray-700 mb-4">Enter OTP</h3>
          <form onSubmit={handleSubmitOtp}>
            <div className="flex space-x-[30px]">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center border border-gray-300 rounded-md text-xl"
                  placeholder="0"
                />
              ))}
            </div>

            <button
              type="submit"
              className={`mt-6 w-full ${
                isOtpVerified
                  ? "bg-green-500"
                  : isOtpComplete
                  ? "bg-[#6D4AAE] hover:bg-[#5b3f8f]"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white py-3 rounded-md text-[25px]`}
              disabled={!isOtpComplete || isOtpVerified}
            >
              {isOtpVerified ? "Verified" : "Verify OTP"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={handleResendOtp}
              disabled={resendCountdown > 0}
              className={`${
                resendCountdown > 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-600 hover:underline font-semibold"
              }`}
            >
              Resend OTP
            </button>
            {resendCountdown > 0 && (
              <p className="text-sm text-gray-600 mt-2">
                You can resend OTP in {resendCountdown} seconds.
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <a
            href="/login"
            className="text-sm text-gray-600 hover:text-blue-600 font-semibold hover:underline"
          >
            Back to Login
          </a>
          <a
            href="/signup"
            className="text-sm text-gray-600 font-semibold hover:text-blue-600 hover:underline"
          >
            Don’t have an account? <span className="font-semibold">Signup</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupOtpVerification;
