import CartItems from "../../ui/Cartitem";

const Cart = () => {
  return (
    <div className="flex justify-center py-5">
      <div className="w-[90%]">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold">Your Cart</h1>
          <p className="text-lg font-semibold text-gray-500 text-[20px]">
            There are <span className="text-pink-700">2</span> products in your
            cart
          </p>
        </div>

        <div className="flex gap-10">
          {/* Cart Items */}
          <div className="w-[70%] border border-gray-200 py-5 rounded-xl px-5">
            <CartItems />
            <CartItems />
            <CartItems />
            <CartItems />
          </div>

          {/* Cart Totals */}
          <div className="w-[30%] border rounded-xl border-gray-200 py-5 px-5">
            <h2 className="text-xl font-semibold mb-5">Cart Totals</h2>
            <div className="flex justify-between mb-3">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold text-pink-700">₹1,300.00</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="text-gray-600">Shipping</span>
              <span className="font-bold text-green-600">Free</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="text-gray-600">Estimate for</span>
              <span className="font-bold text-gray-800">United Kingdom</span>
            </div>
            <div className="flex justify-between mb-5 border-t pt-3">
              <span className="text-gray-800 font-bold">Total</span>
              <span className="font-bold text-pink-700 text-xl">₹1,300.00</span>
            </div>
            <button className="w-full  bg-red-500 text-white py-3 hover:bg-[#000] transition-all duration-500  rounded-md text-xl font-semibold">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
