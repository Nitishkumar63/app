"use client";
import { useState } from "react";
import Link from "next/link";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
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
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <h1 className="font-semibold text-[24px] sm:text-[30px]">Signup</h1>
        </div>

        <form onSubmit={handleSignup} autoComplete="off">
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg sm:text-xl font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md text-sm sm:text-base"
              placeholder="Enter your name"
            />
          </div>

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

        {/* Link to Login */}
        <div className="flex justify-between items-center mt-4">
          <Link
            href="/login"
            className="text-sm sm:text-base text-gray-600 hover:text-blue-600 font-semibold hover:underline"
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
