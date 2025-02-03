export default function FreeShippingBanner() {
  return (
    <div className="flex justify-center mt-20">
      <div className="w-[90%]">
        <div className="border-2 border-red-500 flex items-center justify-between p-4 h-[100px] rounded-lg">
          {/* Left Section */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 7.5h13.5m0 0L20.25 10.5m-3-3l-3.75 6.75H6.75L3.75 12V9.75m13.5 0V12m-13.5 0h13.5M6.75 12v6.75h7.5V12M6.75 12l-3-4.5M17.25 15H18"
                />
              </svg>
            </span>
            <p className="font-bold text-lg">FREE SHIPPING</p>
          </div>

          {/* Center Section */}
          <div className="text-center text-sm text-gray-600">
            Free Delivery Now On Your First Order and over $200
          </div>

          {/* Right Section */}
          <div className="text-right font-bold text-lg">
            - ONLY <span className="text-red-500">$200*</span>
          </div>
        </div>
      </div>
    </div>
  );
}
