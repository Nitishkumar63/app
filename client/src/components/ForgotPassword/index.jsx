import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/users/forgot-password`,
        { email }
      );
      toast.success(data?.message);
      setTimeout(() => {
        navigate("/otp-verification", { state: { email } });
      }, 3000);
      setEmail("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
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

        <form onSubmit={handleForgotPassword} autoComplete="off">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xl mb-2 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full text-white py-3 rounded-md text-[25px] ${
              email
                ? "bg-[#6D4AAE] hover:bg-[#5b3f8f]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!email}
          >
            Send OTP
          </button>
        </form>

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
            Don't have an account? <span className="font-semibold">Signup</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
