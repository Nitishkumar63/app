import { Link } from "react-router";
import Rating from "@mui/material/Rating";
import { IoMdCloseCircle } from "react-icons/io";

const Cartitem = () => {
  const handleSizeChange = (e) => {
    console.log("Selected Size:", e.target.value);
  };

  const handleQtyChange = (e) => {
    console.log("Selected Qty:", e.target.value);
  };
  return (
    <>
      <div className="flex gap-5 relative mb-5 border-b border-gray-200 pb-5">
        <IoMdCloseCircle className="absolute top-1 right-3 text-[30px] cursor-pointer hover:text-purple-800" />
        <div>
          <Link to="/productDetails/8989">
            <img
              src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
              className="w-[150px] rounded-[5px]"
            />
          </Link>
        </div>

        <div>
          <div className="mb-3">
            <h1 className="font-semibold text-gray-600 text-lg">Sangria</h1>
            <Link to="/productDetails/8989">
              <h1 className="text-xl text-[#000] cursor-pointer hover:text-purple-700 font-semibold">
                A-Line Kurti With Sharara & Dupatta
              </h1>
            </Link>

            <Rating name="half-rating" defaultValue={4.0} precision={0.5} />
            <div className="flex items-center">
              <span className="text-xl font-bold text-pink-700 mr-3">
                <span className="font-semibold text-gray-500">Price </span>
                Rs 58
              </span>
              <span className="line-through text-gray-500 mr-3">$68.00</span>
              <span className="text-pink-700 font-semibold">55% OFF</span>
            </div>
          </div>

          <div className="flex gap-x-5">
            <div className="flex items-center">
              <label className="font-semibold text-gray-600 mr-2">Size:</label>
              <select
                className="border border-gray-300 cursor-pointer w-[50px] outline-none rounded-md p-1 text-gray-600"
                onChange={handleSizeChange}
              >
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            <div className="flex items-center">
              <label className="font-semibold text-gray-600 mr-2">Qty:</label>
              <select
                onChange={handleQtyChange}
                className="border border-gray-300 cursor-pointer w-[50px] outline-none rounded-md p-1 text-gray-600"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartitem;
