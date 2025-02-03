import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { BsMinecartLoaded } from "react-icons/bs";
import { Avatar } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import MyProfile from "../../MyProfile/MyProfile";
import MyList from "../../MyList/MyList";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("my-profile");

  const tabButtonClass = (tabIndex) => {
    return `w-full py-3 px-4 flex gap-x-2 items-center text-left rounded-md ${
      activeTab === tabIndex
        ? "bg-blue-500 text-white font-semibold"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black"
    }`;
  };

  return (
    <div className="flex justify-center bg-[#F4EFEF] py-5">
      <div className="w-[90%] rounded-md flex p-6">
        {/* Left Section (Tabs) */}
        <div className="w-[30%] border-r px-5 py-3 rounded-md bg-white cursor-pointer pr-10 flex flex-col items-center">
          <Avatar
            alt="User Avatar"
            src="/path-to-avatar.jpg"
            sx={{ width: 100, height: 100 }}
          />
          <h2 className="text-lg font-semibold mt-4">Rajesh Sharma</h2>
          <p className="text-gray-500">rinkuv37@gmail.com</p>

          <div className="mt-6 space-y-4 w-full">
            <button
              className={tabButtonClass("my-profile")}
              onClick={() => setActiveTab("my-profile")}
            >
              <FaRegUser className="text-lg mr-2" />
              My Profile
            </button>
            <button
              className={tabButtonClass("my-list")}
              onClick={() => setActiveTab("my-list")}
            >
              <BsMinecartLoaded className="text-lg mr-2" />
              My List
            </button>
            <button
              className={tabButtonClass("my-order")}
              onClick={() => setActiveTab("my-order")}
            >
              <MdFavoriteBorder className="text-lg mr-2" />
              My Orders
            </button>
          </div>
        </div>

        {/* Right Section (Tab Content) */}
        <div className="w-[70%] pl-10">
          {activeTab === "my-profile" && <MyProfile />}
          {activeTab === "my-list" && <MyList />}
          {activeTab === "my-order" && (
            <div>My Orders Component (placeholder)</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
