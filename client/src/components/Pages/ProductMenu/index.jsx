import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductSlider from "../ProductSlider";

function ProductMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="flex justify-center py-5 ">
      <div className="w-[90%]">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-[25px] font-semibold">Popular Products</h1>
            <h1 className="text-sm font-semibold text-[20px]">
              Do not miss the current offers until the end of March.
            </h1>
          </div>
          <div>
            <Box
              sx={{
                maxWidth: { xs: 500, sm: 700 },
                bgcolor: "background.paper",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
              </Tabs>
            </Box>
          </div>
        </div>

        <div className="py-10">
          <ProductSlider item={5} />
        </div>

        <div className="py-10">
          <img
            src="/assets/bg.png"
            alt="Free Shipping"
            className="w-[100%] cursor-pointer rounded-md object-cover"
          />
        </div>

        <div className="py-10">
          <div className="mb-10">
            <h1 className="text-[25px] font-semibold">Latest Products</h1>
          </div>

          <ProductSlider item={5} />
        </div>
      </div>
    </div>
  );
}

export default ProductMenu;
