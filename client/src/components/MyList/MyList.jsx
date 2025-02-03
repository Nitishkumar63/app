import { Rating } from "@mui/material";

const ProductList = () => {
  const handleRemove = (id) => {
    console.log(`Remove product with ID: ${id}`);
    // Add logic to remove product
  };

  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">MY LIST</h1>
        <p className="text-gray-600 mb-6">
          There are <span className="text-red-500 font-semibold">2</span>{" "}
          products in your My List
        </p>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-left px-4 py-2">Product</th>
              <th className="text-left px-4 py-2">Unit Price</th>
              <th className="text-left px-4 py-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* Product 1 */}
            <tr className="border-b">
              <td className="flex items-center px-4 py-4 space-x-4">
                <img
                  src="https://via.placeholder.com/60"
                  alt="A-Line Kurti With Sharara & Dupatta"
                  className="w-16 h-16 rounded"
                />
                <div>
                  <p className="font-semibold">
                    A-Line Kurti With Sharara & Dupatta
                  </p>
                  <Rating value={5} readOnly size="small" />
                </div>
              </td>
              <td className="px-4 py-4">Rs 1300</td>
              <td
                className="px-4 py-4 text-red-500 cursor-pointer"
                onClick={() => handleRemove(1)}
              >
                ✕
              </td>
            </tr>
            {/* Product 2 */}
            <tr className="border-b">
              <td className="flex items-center px-4 py-4 space-x-4">
                <img
                  src="https://via.placeholder.com/60"
                  alt="Chikankari Woven Kurta"
                  className="w-16 h-16 rounded"
                />
                <div>
                  <p className="font-semibold">Chikankari Woven Kurta</p>
                  <Rating value={5} readOnly size="small" />
                </div>
              </td>
              <td className="px-4 py-4">Rs 1200</td>
              <td
                className="px-4 py-4 text-red-500 cursor-pointer"
                onClick={() => handleRemove(2)}
              >
                ✕
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
