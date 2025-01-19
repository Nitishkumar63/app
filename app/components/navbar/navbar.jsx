"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaCartPlus, FaBars } from "react-icons/fa";
import Image from "next/image";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-white w-full shadow-sm mb-10">
      <div className="container mx-auto flex justify-between items-center h-[70px] px-4">
        {/* Logo Section */}
        <Link href={"/"}>
          <div className="flex items-center">
            <Image src="/images.png" alt="buskut" width={60} height={60} />
          </div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="text-3xl md:hidden" onClick={toggleDropdown}>
          <FaBars />
        </div>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-[70px] right-0 w-[100%] bg-white shadow-md rounded-md p-4 flex flex-col space-y-4 md:hidden transition-all duration-300 ${
            dropdownOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <Link href={"/cart"}>
            <button className="text-lg border border-[#ccc] rounded-md flex justify-center items-center w-[100%] h-[50px]">
              <FaCartPlus className="text-gray-800 text-[25px]" />
            </button>
          </Link>
          <Link href="/login">
            <button className="text-lg bg-black text-white rounded-md w-[100%] h-[50px] transition font-semibold">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="text-lg bg-black text-white rounded-md w-[100%] h-[50px] transition font-semibold">
              Signup
            </button>
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="flex items-center space-x-10 max-md:hidden">
          <Link href={"/cart"}>
            <button className="text-lg border border-[#ccc] rounded-full flex justify-center items-center w-[50px] h-[50px]">
              <FaCartPlus className="text-gray-800 text-[25px]" />
            </button>
          </Link>
          <Link href="/login">
            <button className="text-lg bg-black text-white rounded-md w-[150px] h-[50px] transition font-semibold">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="text-lg bg-black text-white rounded-md w-[150px] h-[50px] transition font-semibold">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
