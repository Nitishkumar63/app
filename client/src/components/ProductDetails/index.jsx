import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router";
import ProductsZoom from "../ProductsZoom";
import Rating from "@mui/material/Rating";
import ProductSlider from "../../components/Pages/ProductSlider";
import Avatar from "@mui/material/Avatar";
import ProductsDetails from "../ui/ProductsDetails";

const ProductDetails = () => {
  const [tab, setTab] = useState("Description");

  return (
    <div className="flex justify-center py-6">
      <div className="w-[90%]">
        <div className="w-[100%] pl-10 flex items-center h-[70px] border border-gray-300 mb-10 rounded-md bg-gray-200">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">
              <h1 className="capitalize cursor-pointer"> Home </h1>
            </Link>
            <Link to="#">
              <h1 className="capitalize cursor-pointer"> ProductDetails </h1>
            </Link>
          </Breadcrumbs>
        </div>

        <div className="flex gap-x-10">
          <div className="w-[40%]">
            <ProductsZoom />
          </div>
          <div className="py-5 px-5 w-[100%]">
            <ProductsDetails />
          </div>
        </div>

        {/* Tabs Section */}
        <div className="w-[100%] mt-5 h-auto bg-purple-800 text-[20px] rounded-xl px-10 py-10">
          <div className="flex gap-x-10">
            {/* Tab Buttons */}
            {["Description", "Products", "Reviews"].map((tabName) => (
              <button
                key={tabName}
                onClick={() => setTab(tabName)}
                className={`border border-[#ccc] px-10 py-2 rounded-full font-semibold text-gray-300 transition-all duration-300 ${
                  tab === tabName
                    ? "bg-pink-500 text-white"
                    : "hover:bg-pink-500 hover:text-white"
                }`}
              >
                {tabName}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-[100%] mt-5 h-auto py-10 rounded-md bg-white p-5">
            {tab === "Description" && (
              <div>
                <h1 className="text-gray-800 mb-2 font-medium">
                  This is the Description tab content.
                </h1>

                <span className="font-semibold text-[#000] text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </span>
              </div>
            )}
            {tab === "Products" && (
              <div>
                <table className="w-full table-auto border-collapse border border-purple-300 text-left text-gray-700">
                  <tbody>
                    <tr className="border-b border-purple-300">
                      <td className="px-4 py-2 font-medium">Stand Up</td>
                      <td className="px-4 py-2">
                        35"L x 24"W x 37-45"H (front to back wheel)
                      </td>
                    </tr>
                    <tr className="border-b border-purple-300">
                      <td className="px-4 py-2 font-medium">
                        Folded (w/o wheels)
                      </td>
                      <td className="px-4 py-2">32.5"L x 18.5"W x 16.5"H</td>
                    </tr>
                    <tr className="border-b border-purple-300">
                      <td className="px-4 py-2 font-medium">
                        Folded (w/ wheels)
                      </td>
                      <td className="px-4 py-2">32.5"L x 24"W x 18.5"H</td>
                    </tr>
                    <tr className="border-b border-purple-300">
                      <td className="px-4 py-2 font-medium">
                        Door Pass Through
                      </td>
                      <td className="px-4 py-2">24</td>
                    </tr>
                    <tr className="border-b border-purple-300">
                      <td className="px-4 py-2 font-medium">Frame</td>
                      <td className="px-4 py-2">Aluminum</td>
                    </tr>
                    <tr className="border-b border-purple-300">
                      <td className="px-4 py-2 font-medium">
                        Weight (w/o wheels)
                      </td>
                      <td className="px-4 py-2">20 LBS</td>
                    </tr>
                    <tr className="border-b border-purple-300">
                      <td className="px-4 py-2 font-medium">Weight Capacity</td>
                      <td className="px-4 py-2">60 LBS</td>
                    </tr>
                    <tr className="border-b border-purple-300">
                      <td className="px-4 py-2 font-medium">Width</td>
                      <td className="px-4 py-2">24"</td>
                    </tr>
                    <tr className="border-b border-purple-300">
                      <td className="px-4 py-2 font-medium">
                        Handle height (ground to handle)
                      </td>
                      <td className="px-4 py-2">37-45"</td>
                    </tr>
                    <tr className="border-b border-purple-300">
                      <td className="px-4 py-2 font-medium">Wheels</td>
                      <td className="px-4 py-2">
                        12" air / wide track slick tread
                      </td>
                    </tr>
                    <tr className="border-b border-purple-300">
                      <td className="px-4 py-2 font-medium">
                        Seat back height
                      </td>
                      <td className="px-4 py-2">21.5"</td>
                    </tr>
                    <tr className="border-b border-purple-300">
                      <td className="px-4 py-2 font-medium">
                        Head room (inside canopy)
                      </td>
                      <td className="px-4 py-2">25"</td>
                    </tr>
                    <tr className="border-b border-purple-300">
                      <td className="px-4 py-2 font-medium">Color</td>
                      <td className="px-4 py-2">Black, Blue, Red, White</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Size</td>
                      <td className="px-4 py-2">M, S</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {tab === "Reviews" && (
              <div>
                <div className="bg-purple-100 p-5 rounded-lg">
                  <div className="w-[800px] px-5 overflow-y-scroll h-[600px]">
                    <h2 className="text-lg font-bold text-gray-700 mb-4">
                      Customer questions & answers
                    </h2>
                    {/* Static Reviews */}
                    <div className="flex items-start justify-between border-b border-gray-300 pb-2">
                      <div className="flex gap-x-5 items-center">
                        <div>
                          <Avatar
                            alt="Cindy Baker"
                            src="data:image/jpeg;base64,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"
                            sx={{ width: 56, height: 56 }}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800">
                            sanjeev
                          </p>
                          <p className="text-xs text-gray-500">2024-11-27</p>
                          <p className="text-sm text-gray-700">jkjkj</p>
                        </div>
                      </div>
                      <Rating value={5} readOnly size="small" />
                    </div>

                    <div className="flex items-start justify-between border-b border-gray-300 pb-2 mt-4">
                      <div className="flex gap-x-5 items-center">
                        <div>
                          <Avatar
                            alt="Cindy Baker"
                            src="data:image/jpeg;base64,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"
                            sx={{ width: 56, height: 56 }}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800">
                            sanjeev
                          </p>
                          <p className="text-xs text-gray-500">2024-11-27</p>
                          <p className="text-sm text-gray-700">jkjkj</p>
                        </div>
                      </div>
                      <Rating value={5} readOnly size="small" />
                    </div>

                    <div className="flex items-start justify-between border-b border-gray-300 pb-2 mt-4">
                      <div className="flex gap-x-5 items-center">
                        <div>
                          <Avatar
                            alt="Cindy Baker"
                            src="data:image/jpeg;base64,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"
                            sx={{ width: 56, height: 56 }}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800">
                            sanjeev
                          </p>
                          <p className="text-xs text-gray-500">2024-11-27</p>
                          <p className="text-sm text-gray-700">jkjkj</p>
                        </div>
                      </div>
                      <Rating value={5} readOnly size="small" />
                    </div>

                    <div className="flex items-start justify-between border-b border-gray-300 pb-2 mt-4">
                      <div className="flex gap-x-5 items-center">
                        <div>
                          <Avatar
                            alt="Cindy Baker"
                            src="data:image/jpeg;base64,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"
                            sx={{ width: 56, height: 56 }}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800">
                            sanjeev
                          </p>
                          <p className="text-xs text-gray-500">2024-11-27</p>
                          <p className="text-sm text-gray-700">jkjkj</p>
                        </div>
                      </div>

                      <Rating value={1} readOnly size="small" />
                    </div>

                    {/* Add a Review Section */}
                    <h3 className="text-md font-semibold text-gray-800 mt-6">
                      Add a review
                    </h3>
                    <textarea
                      className="w-full mt-2 p-2 border border-gray-300 h-[200px] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder="Write a Review"
                    ></textarea>
                    <div className="flex items-center justify-between mt-3">
                      <Rating
                        // value={newRating}
                        // onChange={(event, newValue) => setNewRating(newValue)}
                        size="large"
                      />
                      <button
                        // onClick={handleAddReview}
                        className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-10">
            <h1 className="text-[25px] font-semibold">Related Products</h1>
          </div>
          <ProductSlider item={5} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
