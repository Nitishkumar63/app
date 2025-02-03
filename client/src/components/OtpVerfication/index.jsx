import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(50);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [isVerifyDisabled, setIsVerifyDisabled] = useState(true); // Verify button state
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  useEffect(() => {
    // Enable Verify OTP button only if all inputs are filled
    setIsVerifyDisabled(otp.some((digit) => digit === ""));
  }, [otp]);

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
        `http://localhost:8080/api/v1/users/forgot-password-otp-verify`,
        { otp: userOtp, email },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data?.message);
      setTimeout(() => {
        navigate("/reset-password", { state: { email } });
      }, 3000);
      setOtp(["", "", "", "", "", ""]);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const handleResendOtp = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/users/resend-otp`,
        { email },
        {
          withCredentials: true,
        }
      );
      toast.success(data?.message);
      setTimer(50);
      setIsResendDisabled(true);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

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
              disabled={isVerifyDisabled}
              className={`mt-6 w-full py-3 rounded-md text-[25px] ${
                isVerifyDisabled
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#6D4AAE] text-white hover:bg-[#5b3f8f]"
              }`}
            >
              Verify OTP
            </button>
          </form>
        </div>

        {/* Resend OTP Button */}
        <button
          type="button"
          onClick={handleResendOtp}
          disabled={isResendDisabled}
          className={`mt-4 w-full py-3 rounded-md text-[25px] ${
            isResendDisabled
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-[#6D4AAE] text-white hover:bg-[#5b3f8f]"
          }`}
        >
          Resend OTP {isResendDisabled && `(${timer}s)`}
        </button>

        <div className="flex justify-between items-center mt-4">
          <a
            href="/signup"
            className="text-sm text-gray-600 font-semibold hover:text-blue-600 hover:underline"
          >
            Don t have an account? <span className="font-semibold">Signup</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
