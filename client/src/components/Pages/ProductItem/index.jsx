import * as React from "react";
import { Link } from "react-router";
import Rating from "@mui/material/Rating";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import { MdOutlineZoomOutMap } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { MyContext } from "../../../App";

function ProductItem() {
  const { handleClickOpen } = React.useContext(MyContext);
  const [value, setValue] = React.useState(2);

  return (
    <Link to="/productDetails/8989">
      <div className="w-[300px] border overflow-hidden cursor-pointer rounded-md bg-gray-200 border-[#ccc]">
        <div className="mb-3 relative group">
          <img
            src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
            alt="image"
            className="w-[100%] rounded-t-md object-contain"
          />

          <img
            src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
            alt="image"
            className="w-[100%] transition-all duration-700 group-hover:scale-105 rounded-t-md object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100"
          />

          <span className="text-white absolute top-5 left-5 font-semibold text-[17px] p-1 px-3 py-2 rounded-full z-[5] bg-pink-500">
            8%
          </span>

          {/* Hover Buttons */}
          <div className="absolute  top-[-200px] right-5 z-[5000] transition-all duration-1000 group-hover:top-5">
            <Tooltip title="Zoom" placement="right" arrow>
              <button
                onClick={handleClickOpen}
                className="rounded-full  mb-3 hover:bg-[#E74B4E] bg-white w-[50px] h-[50px] flex justify-center items-center"
              >
                <MdOutlineZoomOutMap className="text-[30px]  text-black hover:text-white " />
              </button>
            </Tooltip>

            <Tooltip title="Wishlist" placement="right" arrow>
              <button className="rounded-full mb-3 hover:bg-[#E74B4E] bg-white w-[50px] h-[50px] flex justify-center items-center">
                <FaRegHeart className="text-[30px]  text-black hover:text-white " />
              </button>
            </Tooltip>
            <Tooltip title="Compare" placement="right" arrow>
              <button className="rounded-full hover:bg-[#E74B4E] bg-white w-[50px] h-[50px] flex justify-center items-center">
                <IoGitCompareSharp className="text-[30px]  text-black hover:text-white " />
              </button>
            </Tooltip>
          </div>
        </div>

        <div className="px-3 py-3 flex flex-col capitalize">
          <h1 className="font-semibold text-[17px] hover:text-purple-600 text-[#948d8d] cursor-pointer">
            Sylent Green
          </h1>
          <Link
            to="#"
            className="font-semibold capitalize mb-1 leading-6 hover:text-purple-600 text-[rgba(0,0,0,0.9)] text-[20px] cursor-pointer"
          >
            A-Line Kurti With Sharara & Dupatta
          </Link>
          <div className="mb-1">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div className="flex gap-x-4">
            <h1 className="text-[18px] font-semibold text-[#999595] line-through">
              ₹ 555
            </h1>
            <h1 className="text-[18px] font-semibold text-rose-700">₹ 555</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
