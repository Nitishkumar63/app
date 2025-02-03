import * as React from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import { Button } from "@mui/material";
import { MyContext } from "../../App";
const CartPanel = () => {
  const { toggleDrawer } = React.useContext(MyContext);
  return (
    <div className="px-5 py-5">
      <div className="overflow-x-auto h-[600px]">
        <div className=" border-b pb-4 mb-5">
          <div className="flex space-x-4">
            <Link to="/productDetails/8989" className="group">
              <img
                src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731488541/1731488537574_KmYlElu1_048aca8ee860449f8dde8da4e34ee54d.jpg"
                alt="Product"
                className="w-[150px] cursor-pointer group-hover:scale-105 transition-all duration-800  h-[160px] object-cover rounded-md"
              />
            </Link>
            <div>
              <Link to="/productDetails/8989">
                <p className="font-medium cursor-pointer hover:text-pink-900">
                  BoAt Lite Smartwatch 1.69 Inches HD Display
                </p>
              </Link>
              <p className="text-gray-500 font-semibold">
                Qty : <span className="text-red-500">5</span>
              </p>

              <p className="text-gray-500 font-semibold">
                Price : <span className="text-red-500">₹ 500</span>
              </p>

              <button className="text-gray-500 mt-2 hover:text-pink-500">
                <MdDelete className="text-[30px]" />
              </button>
            </div>
          </div>
        </div>

        <div className=" border-b pb-4 mb-5">
          <div className="flex space-x-4">
            <img
              src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731488541/1731488537574_KmYlElu1_048aca8ee860449f8dde8da4e34ee54d.jpg"
              alt="Product"
              className="w-[150px] h-[160px] object-cover rounded-md"
            />
            <div>
              <p className="font-medium">
                BoAt Lite Smartwatch 1.69 Inches HD Display
              </p>
              <p className="text-gray-500 font-semibold">
                Qty : <span className="text-red-500">5</span>
              </p>

              <p className="text-gray-500 font-semibold">
                Price : <span className="text-red-500">₹ 500</span>
              </p>

              <button className="text-gray-500 mt-2 hover:text-pink-500">
                <MdDelete className="text-[30px]" />
              </button>
            </div>
          </div>
        </div>

        <div className=" border-b pb-4 mb-5">
          <div className="flex space-x-4">
            <img
              src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731488541/1731488537574_KmYlElu1_048aca8ee860449f8dde8da4e34ee54d.jpg"
              alt="Product"
              className="w-[150px] h-[160px] object-cover rounded-md"
            />
            <div>
              <p className="font-medium">
                BoAt Lite Smartwatch 1.69 Inches HD Display
              </p>
              <p className="text-gray-500 font-semibold">
                Qty : <span className="text-red-500">5</span>
              </p>

              <p className="text-gray-500 font-semibold">
                Price : <span className="text-red-500">₹ 500</span>
              </p>

              <button className="text-gray-500 mt-2 hover:text-pink-500">
                <MdDelete className="text-[30px]" />
              </button>
            </div>
          </div>
        </div>

        <div className=" border-b pb-4 mb-5">
          <div className="flex space-x-4">
            <img
              src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731488541/1731488537574_KmYlElu1_048aca8ee860449f8dde8da4e34ee54d.jpg"
              alt="Product"
              className="w-[150px] h-[160px] object-cover rounded-md"
            />
            <div>
              <p className="font-medium">
                BoAt Lite Smartwatch 1.69 Inches HD Display
              </p>
              <p className="text-gray-500 font-semibold">
                Qty : <span className="text-red-500">5</span>
              </p>

              <p className="text-gray-500 font-semibold">
                Price : <span className="text-red-500">₹ 500</span>
              </p>

              <button className="text-gray-500 mt-2 hover:text-pink-500">
                <MdDelete className="text-[30px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-3 ">
        {/* Pricing Details */}
        <div className="mt-4">
          <div className="flex justify-between text-lg">
            <p>2 items</p>
            <p>$128.34</p>
          </div>
          <div className="flex justify-between text-lg">
            <p>Shipping</p>
            <p>$7.00</p>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <p>Total (tax excl.)</p>
            <p>$135.34</p>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <p>Total (tax incl.)</p>
            <p>$135.34</p>
          </div>
          <div className="flex justify-between text-lg">
            <p>Taxes</p>
            <p>$0.00</p>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center px-6 py-3 border-t border-gray-300">
        <Link to="/cart">
          <Button
            onClick={toggleDrawer(false)}
            className="!px-10 !py-3 !bg-pink-700 !text-white !font-semibold !text-[18px] !rounded-md"
          >
            VIEW CART
          </Button>
        </Link>
        <Link to="/checkout">
          <Button
            onClick={toggleDrawer(false)}
            className="!px-10 !py-3 !bg-red-500 !text-white   !font-semibold !text-[18px]  !rounded-md"
          >
            CHECKOUT
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartPanel;
