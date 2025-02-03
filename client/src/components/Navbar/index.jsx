import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosGitCompare } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router";
import NavbarBottom from "../ui/NavbarBottom";
import Header from "../Header";
import { MyContext } from "../../App";
import { FaUserCircle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { BsMinecartLoaded } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useContext } from "react";

function Navbar() {
  const { setIsLogin } = useContext(MyContext);
  const navigate = useNavigate();

  const { toggleDrawer, IsLogin } = React.useContext(MyContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/users/logout`,
        {
          withCredentials: true,
        }
      );

      setTimeout(() => {
        navigate("/login");
      }, 3000);
      setIsLogin(false);
      toast.success(data?.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="w-[100%] h-[80px] flex justify-center bg-white border-b border">
        <div className="w-[90%] h-[100%] flex justify-between items-center">
          {/* Logo */}
          <div className="cursor-pointer">
            <Link to="/">
              <img
                src={"/assets/download.jpeg"}
                className="object-cover"
                alt="logoImage"
              />
            </Link>
          </div>

          {/* Search Input */}
          <div className="flex items-center">
            <div className="w-[700px] h-[50px] bg-gray-200 flex items-center rounded-[5px] border border-[#cccccc] overflow-hidden">
              <input
                type="text"
                className="w-[100%] h-full px-3 outline-none bg-gray-200 font-medium"
                placeholder="Search your products..."
              />
              <button className="flex items-center justify-center pr-3 cursor-pointer bg-gray-200 h-full">
                <SearchIcon className="text-[30px] text-gray-700" />
              </button>
            </div>
          </div>

          {/* Navigation Links and Icons */}
          <div className="flex gap-x-[50px] items-center">
            {/* Login/Register Links */}
            <div className="flex items-center gap-x-7">
              {!IsLogin && (
                <ul className="flex items-center gap-x-3">
                  <li>
                    <Link
                      to="/login"
                      className="text-lg font-medium hover:text-[#eb2eb2] cursor-pointer"
                    >
                      Login
                    </Link>
                  </li>
                  /
                  <li>
                    <Link
                      to="/signup"
                      className="text-lg font-medium hover:text-[#eb2eb2] cursor-pointer"
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              )}

              {/* User Profile Icon */}
              {IsLogin && (
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <div className="flex items-center gap-x-2">
                      <div>
                        <FaUserCircle className="text-[40px] text-gray-500 cursor-pointer" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-sm capitalize text-gray-600 font-semibold">
                          Nitish Kumar
                        </span>
                        <span className="text-sm  text-gray-600 font-semibold">
                          nitishkumar22553@gmail.com
                        </span>
                      </div>
                    </div>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <Link to="/my-account">
                      <MenuItem onClick={handleClose}>
                        <FaRegUser className="mr-2 text-lg" />{" "}
                        <sapn className="mt-1">My account</sapn>
                      </MenuItem>
                    </Link>

                    <Link to="/order">
                      <MenuItem onClick={handleClose}>
                        <BsMinecartLoaded className="mr-2 text-lg" />{" "}
                        <sapn className="mt-1">Orders</sapn>
                      </MenuItem>
                    </Link>

                    <Link to="/my-list">
                      <MenuItem onClick={handleClose}>
                        <MdFavoriteBorder className="mr-2 text-lg" />
                        <sapn className="mt-1">My List</sapn>
                      </MenuItem>
                    </Link>

                    <MenuItem onClick={handleLogout}>
                      <IoMdLogOut className="mr-2 text-lg" />
                      <sapn className="mt-1">Logout</sapn>
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </div>

            {/* Compare Icon */}
            <div>
              <Tooltip title="Compare" arrow>
                <Badge badgeContent={1} color="success">
                  <IoIosGitCompare className="text-[30px] text-gray-500 hover:text-[#eb2eb2]  cursor-pointer" />
                </Badge>
              </Tooltip>
            </div>

            {/* Wishlist Icon */}
            <div>
              <Tooltip title="Wishlist" arrow>
                <Badge badgeContent={1} color="success">
                  <FaRegHeart className="text-[30px] text-gray-500 hover:text-[#eb2eb2] cursor-pointer" />
                </Badge>
              </Tooltip>
            </div>

            {/* Shopping Cart Icon */}
            <div onClick={toggleDrawer(true)}>
              <Tooltip title="Cart" arrow>
                <Badge badgeContent={1} color="success">
                  <MdOutlineShoppingCart className="text-[30px] text-gray-500 hover:text-[#eb2eb2]  cursor-pointer" />
                </Badge>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <NavbarBottom />
    </div>
  );
}

export default Navbar;
