import { useState, useEffect } from "react";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Password and Confirm Password do not match.");
      return;
    }

    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/users/reset-password`,
        { email, password: form.password },
        {
          withCredentials: true,
        }
      );

      toast.success(data?.message);

      setTimeout(() => {
        navigate("/login");
      }, 3000);

      setForm({
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center py-20 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <form onSubmit={handleResetPassword} autoComplete="off">
          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-xl font-medium text-gray-700"
            >
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={form.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                placeholder="Enter new password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? (
                  <BiSolidHide className="text-[25px]" />
                ) : (
                  <BiSolidShow className="text-[25px]" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-xl font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={form.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                placeholder="Confirm new password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showConfirmPassword ? (
                  <BiSolidHide className="text-[25px]" />
                ) : (
                  <BiSolidShow className="text-[25px]" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!form.password || form.password !== form.confirmPassword}
            className={`w-full py-3 rounded-md text-[25px] ${
              form.password && form.password === form.confirmPassword
                ? "bg-[#6D4AAE] text-white hover:bg-[#5b3f8f]"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
          >
            Reset Password
          </button>
        </form>

        {/* Back to Login Link */}
        <div className="flex justify-between items-center mt-4">
          <a
            href="/login"
            className="text-sm text-gray-600 hover:text-blue-600 font-semibold hover:underline"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
