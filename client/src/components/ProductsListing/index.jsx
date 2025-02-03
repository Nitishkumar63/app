import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router";
import Sliders from "./Slider";
import ProductItem from "../../components/Pages/ProductItem";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ProductListing = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex justify-center">
      <div className="w-[90%] py-5">
        <div className="w-[100%] pl-10 flex items-center h-[70px] border border-gray-300 mb-10 rounded-md bg-gray-200">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">
              <h1 className="capitalize  cursor-pointer"> Home </h1>
            </Link>

            <Link to="#">
              <h1 className="capitalize  cursor-pointer"> Fashion </h1>
            </Link>
          </Breadcrumbs>
        </div>

        <div className="flex gap-x-5">
          {/* left */}
          <div className="w-[25%] rounded-md px-5 py-5 border border-gray-300">
            <Sliders />
          </div>

          {/* right */}
          <div className="w-[100%] border rounded-md border-gray-300 px-5 py-5">
            {/* range  */}
            <div className="w-[100%] px-5 flex justify-between items-center h-[70px] border border-gray-300 mb-10 rounded-md bg-[#F4EFEF]">
              <div>
                <h1 className="text-lg font-semibold text-pink-500">
                  There are 18 Products.
                </h1>
              </div>

              <div className="flex items-center">
                <h1 className="text-lg font-semibold text-gray-700">
                  Sort By :
                </h1>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!text-[15px] !text-black"
                >
                  highest to lowest
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
                  <MenuItem onClick={handleClose}>Relevance</MenuItem>
                  <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                  <MenuItem onClick={handleClose}>Name, Z to A</MenuItem>
                  <MenuItem onClick={handleClose}>Price, low to high</MenuItem>
                  <MenuItem onClick={handleClose}>Price, high to low</MenuItem>
                </Menu>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-5">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>

            <div className="py-2 mt-20 flex justify-center">
              <Stack spacing={2}>
                <Pagination
                  count={10}
                  page={page}
                  color="secondary"
                  onChange={handleChange}
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
