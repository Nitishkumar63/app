"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-8">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <h1 className="font-semibold text-[24px] sm:text-[30px]">Login</h1>
        </div>

        <form onSubmit={handleSignup} autoComplete="off">
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg sm:text-xl font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md text-sm sm:text-base"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg sm:text-xl font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={form.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md text-sm sm:text-base"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 sm:top-3 text-gray-500"
              >
                {showPassword ? (
                  <BiSolidHide className="text-[20px] sm:text-[25px]" />
                ) : (
                  <BiSolidShow className="text-[20px] sm:text-[25px]" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#6D4AAE] text-white py-2 sm:py-3 rounded-md text-lg sm:text-[25px] hover:bg-[#5b3f8f] transition"
          >
            Signup
          </button>
        </form>

        <div className="flex justify-between items-center mt-4">
          <Link
            href="/signup"
            className="text-sm sm:text-base text-gray-600 hover:text-blue-600 font-semibold hover:underline"
          >
            Don’t have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
