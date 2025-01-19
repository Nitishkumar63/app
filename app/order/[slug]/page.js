"use client";
import Navbar from "@/app/components/navbar/navbar";
import Image from "next/image";
import { useState } from "react";

const Order = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const orderData = {
    productName: "Buskut",
    productDescription: "A delicious crispy snack perfect for any time.",
  };

  return (
    <>
      <Navbar />
      <div className="px-5 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:gap-x-20">
          <div className="flex justify-center">
            <Image
              src="/buskut.webp"
              alt="buskut"
              s
              width={500}
              height={500}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
          <div className="mt-5 sm:mt-0">
            <h1 className="font-bold text-2xl sm:text-3xl">
              {orderData.productName}
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {orderData.productDescription}
            </p>
            <div className="flex items-center mt-5">
              <button
                className="bg-gray-300 text-black px-3 py-1 rounded-l"
                onClick={decrementQuantity}
              >
                -
              </button>
              <span className="bg-gray-200 px-5 py-1 border-t border-b border-gray-400">
                {quantity}
              </span>
              <button
                className="bg-gray-300 text-black px-3 py-1 rounded-r"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            <button className="mt-5 bg-blue-500 text-white px-5 py-2 rounded w-full sm:w-auto">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
