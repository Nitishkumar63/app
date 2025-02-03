import { Link } from "react-router";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IoLogoGoogle } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { MyContext } from "../../App";
const Login = () => {
  const { setIsLogin } = useContext(MyContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Check if both fields are filled
  const isFormValid = form.email.trim() !== "" && form.password.trim() !== "";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/users/login`,
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setTimeout(() => {
        navigate("/");
      }, 3000);
      toast.success(data?.message);
      setIsLogin(true);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center py-20 bg-gray-200 h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[500px]">
        <div className="flex justify-center mb-6">
          <img
            src={"/assets/download.jpeg"}
            className="w-[170px] h-[50px]"
            alt="logoImage"
          />
        </div>

        <form onSubmit={handleLogin} autoComplete="false">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xl font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-xl font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={form.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? (
                  <VisibilityIcon className="text-[25px]" />
                ) : (
                  <VisibilityOffIcon className="text-[25px]" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 rounded-md text-[25px] text-white ${
              isFormValid
                ? "bg-[#6D4AAE] hover:bg-[#5b3f8f]"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>

        <button
          type="button"
          className="w-full mt-5 text-white font-semibold py-3 rounded-md text-[25px] bg-pink-700"
        >
          <div className="flex gap-x-3 items-center justify-center">
            <IoLogoGoogle className="text-[30px] text-white" /> Signup With
            Google
          </div>
        </button>

        <div className="flex justify-between items-center mt-4">
          <Link
            to="/forgot-password"
            className="text-sm text-gray-600 hover:text-blue-600 font-semibold hover:underline"
          >
            Forgot Password?
          </Link>
          <Link
            to="/signup"
            className="text-sm text-gray-600 font-semibold hover:text-blue-600 hover:underline"
          >
            I do not have an account?
            <span className="font-semibold">Signup</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
