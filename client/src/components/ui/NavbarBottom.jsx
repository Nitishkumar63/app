import { Link } from "react-router";
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import Fashion from "../category/Fashion";
import Electronics from "../category/Electronics";
import { useState } from "react";
function NavbarBottom() {
  const [showFashion, setShowFashion] = useState(false);
  const [showElectronics, setShowElectronics] = useState(false);
  return (
    <div>
      <div className="flex justify-center py-4 border-[1] border-b">
        <div className="w-[90%] flex justify-between items-center pt-2">
          <div className="w-[250px] h-[50px] rounded-[30px] flex justify-between px-5 items-center cursor-pointer bg-[#6D4AAE]">
            <IoMdMenu className="text-white text-[20px]" />
            <p className="text-[15px] text-white font-semibold">
              ALL CATEGORIES
            </p>
            <FaAngleDown className="text-[20px] text-white font-semibold" />
          </div>

          <div className="flex gap-x-5 items-center">
            <div className="flex gap-x-5 items-center">
              <Link to="/">
                <button className="text-[15px] rounded-[20px] px-5 h-[40px] flex items-center justify-center hover:bg-gray-200 font-semibold text-[#6D4AAE]">
                  Home
                </button>
              </Link>

              <div
                onMouseEnter={() => setShowFashion(true)}
                onMouseLeave={() => setShowFashion(false)}
              >
                <Link to="/productListing">
                  <button className="text-[15px] rounded-[20px] px-5 h-[40px] flex items-center justify-center hover:bg-gray-200 font-semibold text-[#6D4AAE]">
                    FASHION
                  </button>
                </Link>
                {showFashion && <Fashion />}
              </div>

              <div
                onMouseEnter={() => setShowElectronics(true)}
                onMouseLeave={() => setShowElectronics(false)}
              >
                <Link to="/dashboard/products/fashion">
                  <button className="text-[15px] rounded-[20px] px-5 h-[40px] flex items-center justify-center hover:bg-gray-200 font-semibold text-[#6D4AAE]">
                    Electronics
                  </button>
                </Link>
                {showElectronics && <Electronics />}
              </div>

              <Link to="/dashboard/products/gorceries">
                <button className="text-[15px] rounded-[20px] px-5 h-[40px] flex items-center justify-center hover:bg-gray-200 font-semibold text-[#6D4AAE]">
                  GROCERIES
                </button>
              </Link>

              <Link to="/dashboard/products/footwear">
                <button className="text-[15px] rounded-[20px] px-5 h-[40px] flex items-center justify-center hover:bg-gray-200 font-semibold text-[#6D4AAE]">
                  FOOTWEAR
                </button>
              </Link>

              <Link to="/dashboard/products/beauty">
                <button className="text-[15px] rounded-[20px] px-5 h-[40px] flex items-center justify-center hover:bg-gray-200 font-semibold text-[#6D4AAE]">
                  BEAUTY
                </button>
              </Link>

              <Link to="/dashboard/products/wellness">
                <button className="text-[15px] rounded-[20px] px-5 h-[40px] flex items-center justify-center hover:bg-gray-200 font-semibold text-[#6D4AAE]">
                  WELLNESS
                </button>
              </Link>

              <Link to="/dashboard/products/bags">
                <button className="text-[15px] rounded-[20px] px-5 h-[40px] flex items-center justify-center hover:bg-gray-200 font-semibold text-[#6D4AAE]">
                  BAGS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarBottom;
