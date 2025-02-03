import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Rating from "@mui/material/Rating";

const Sliders = () => {
  const [value, setValue] = React.useState([100, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <h1 className="font-semibold text-purple-600 text-[20px] py-2">
          Products Category
        </h1>

        {/* Product Categories */}
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Men" />
          <FormControlLabel control={<Checkbox />} label="Women" />
          <FormControlLabel control={<Checkbox />} label="Laptop" />
          <FormControlLabel control={<Checkbox />} label="Mobile" />
          <FormControlLabel control={<Checkbox />} label="SmartWatch" />
          <FormControlLabel control={<Checkbox />} label="Carmeras" />
        </FormGroup>

        {/* Price Range Slider */}
        <div className="py-4">
          <h1 className="font-semibold text-purple-600 text-[20px] py-2">
            Filter By Price
          </h1>
          <Box sx={{ width: 300 }}>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={100}
              max={1000}
            />
          </Box>
          <div className="flex justify-between items-center mt-2">
            <h1 className="font-medium text-sm text-purple-600">
              From:
              <span className="text-black font-semibold">Rs {value[0]}</span>
            </h1>
            <h1 className="font-medium text-sm text-purple-600">
              To:
              <span className="text-black font-semibold">Rs {value[1]}</span>
            </h1>
          </div>

          <div className="py-5">
            <h1 className="font-semibold text-purple-600 text-[20px] py-2">
              Size
            </h1>

            {/* Product sIZE*/}
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Small" />
              <FormControlLabel control={<Checkbox />} label="Medium" />
              <FormControlLabel control={<Checkbox />} label="Large" />
              <FormControlLabel control={<Checkbox />} label="XL" />
              <FormControlLabel control={<Checkbox />} label="XXL" />
            </FormGroup>
          </div>

          <div className="mb-5">
            <h1 className="font-semibold text-purple-600 text-[20px] py-2">
              Availabillety
            </h1>

            {/* Product sIZE*/}
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Stock (17)" />
              <FormControlLabel control={<Checkbox />} label="In Stock (17)" />
              <FormControlLabel
                control={<Checkbox />}
                label="Not Available (0)"
              />
            </FormGroup>
          </div>

          <div>
            <h1 className="font-semibold text-purple-600 text-[20px] py-2">
              Filter By Rating
            </h1>

            <div className="flex flex-col">
              <Rating name="size-medium" defaultValue={5} size="medium" />
              <Rating name="size-medium" defaultValue={4} size="medium" />
              <Rating name="size-medium" defaultValue={3} size="medium" />
              <Rating name="size-medium" defaultValue={2} size="medium" />
              <Rating name="size-medium" defaultValue={1} size="medium" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
