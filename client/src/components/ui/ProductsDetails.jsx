import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";

const ProductsDetails = () => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const sizes = ["S", "M", "L", "XL"];

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div>
      <div>
        <h1 className="font-bold text-[30px] cursor-pointer">
          Chikankari Woven Kurta
        </h1>
        <h1 className="text-[15px] flex items-center text-gray-400 cursor-pointer font-semibold">
          Brand :
          <span className="text-[#000] ml-2 opacity-75">
            House of Chikankari
          </span>
          <span className="mt-1 ml-2">
            <Rating name="size-medium" defaultValue={5} size="size-medium" />
          </span>
        </h1>

        <div className="flex gap-x-5 items-center mt-2">
          <h1 className="font-semibold text-[25px] text-gray-500 line-through">
            ₹ 555
          </h1>

          <h1 className="font-semibold text-[25px] text-rose-600">₹ 555</h1>
        </div>

        <div className="rounded-lg mt-5 bg-slate-700 w-[100px] flex items-center justify-center py-2">
          <h1 className="font-semibold text-[17px] text-white">In Stock</h1>
        </div>

        <div className="mt-10">
          <h1 className="text-sm font-medium text-gray-700">
            Rs: Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </h1>
        </div>

        <div className="mt-10 mb-20 flex gap-x-3 items-center">
          <h1 className="font-semibold text-lg text-gray-600">Size : </h1>
          {sizes.map((size) => (
            <Button
              key={size}
              size="small"
              onClick={() => setSelectedSize(size)} // Update selected size
              className={`!text-[15px] ${
                selectedSize === size
                  ? "!bg-pink-600 !text-white"
                  : "!bg-gray-300 !text-gray-600"
              }`}
            >
              {size}
            </Button>
          ))}
        </div>

        <div className="flex items-center  gap-x-6 mt-10">
          <Tooltip title="Decrement" placement="top">
            <button
              onClick={handleDecrement}
              className="w-[40px] h-[40px] rounded-full border border-gray-400 flex items-center justify-center text-lg text-gray-500"
            >
              -
            </button>
          </Tooltip>

          <span className="text-lg font-semibold">{quantity}</span>

          <Tooltip title="Increment" placement="top">
            <button
              onClick={handleIncrement}
              className="w-[40px] h-[40px] rounded-full border border-gray-400 flex items-center justify-center text-lg text-gray-500"
            >
              +
            </button>
          </Tooltip>

          <Tooltip title="Add To Cart" placement="top">
            <Button
              size="large"
              className="!bg-red-600 !text-white !gap-x-2 !font-semibold !rounded-full !px-8 !py-2"
            >
              <MdOutlineShoppingCart className="text-white text-[25px]" />
              <h1> Add To Cart</h1>
            </Button>
          </Tooltip>

          <Tooltip title="WishList" placement="top">
            <button className="w-[40px] h-[40px] rounded-full border border-gray-400 flex items-center justify-center text-lg text-gray-500">
              <FaRegHeart className="text-#000 text-[20px]" />
            </button>
          </Tooltip>
          <Tooltip title="Compare" placement="top">
            <button className="w-[40px] h-[40px] rounded-full border border-gray-400 flex items-center justify-center text-lg text-gray-500">
              <IoIosGitCompare className="text-#000 text-[20px]" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
