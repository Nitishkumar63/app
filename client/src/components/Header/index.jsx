import { Link } from "react-router";

function Header() {
  return (
    <div>
      <div className="w-[100%] h-[40px] flex justify-center border border-b">
        <div className="w-[90%]  h-[100%] py-2">
          <div className=" justify-between flex items-center">
            <div>
              <h1 className="text-[15px]  font-medium text-gray-500">
                Get up to 50% off new season styles, limited time only
              </h1>
            </div>

            <div className="flex gap-x-5 items-center">
              <div className="flex gap-x-5 items-center">
                <Link
                  to="help-center"
                  className="text-[15px] hover:text-[#E84E53] cursor-pointer font-medium text-gray-500"
                >
                  Help Center
                </Link>
                <h1 className="text-[15px] font-medium text-gray-500">|</h1>
              </div>

              <div className="flex gap-x-5 items-center">
                <h1 className="text-[15px] hover:text-[#E84E53] cursor-pointer font-medium text-gray-500">
                  Order Tracking
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
