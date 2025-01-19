"use client";

import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 49.99,
      originalPrice: 69.99,
      discount: "30% off",
      imageUrl: "/buskut.webp",
    },
    {
      id: 2,
      name: "Product 1",
      price: 49.99,
      originalPrice: 69.99,
      discount: "30% off",
      imageUrl: "/buskut.webp",
    },
    {
      id: 3,
      name: "Product 1",
      price: 49.99,
      originalPrice: 69.99,
      discount: "30% off",
      imageUrl: "/buskut.webp",
    },
    {
      id: 4,
      name: "Product 1",
      price: 49.99,
      originalPrice: 69.99,
      discount: "30% off",
      imageUrl: "/large.webp",
    },
    {
      id: 5,
      name: "Product 1",
      price: 49.99,
      originalPrice: 69.99,
      discount: "30% off",
      imageUrl: "/bi.jpg",
    },
  ];

  // Function to handle delete action
  const handleDelete = (productId) => {
    console.log(`Delete product with ID: ${productId}`);
    // Add your delete logic here, e.g., API call
  };

  return (
    <div className="py-6">
      <div className="px-10 grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg max-w-sm"
          >
            {/* Product Image */}
            <div className="w-full h-auto rounded-lg overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="mt-4">
              <h2 className="text-lg font-bold text-gray-800">
                {product.name}
              </h2>

              {/* Price and Discount */}
              <div className="mt-2 flex items-center">
                <span className="text-xl font-bold text-rose-600">
                  ₹{product.price.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ₹{product.originalPrice.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-green-500">
                  {product.discount}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
