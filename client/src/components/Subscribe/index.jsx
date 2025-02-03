const Subscribe = () => {
  return (
    <div>
      <div className="bg-purple-600 mt-10 flex justify-center text-white h-[350px]">
        <div className="w-[90%] flex flex-col lg:flex-row justify-between items-center py-5">
          {/* Text Section */}
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-[35px] font-semibold mb-2">
              $20 discount for your first order
            </h2>
            <p className="text-lg mb-6">
              Join our newsletter and get the latest updates <br />
              on promotions and coupons.
            </p>
            <div className="flex justify-center lg:justify-start">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-[300px] px-4 h-[50px] rounded-md focus:outline-none text-gray-700"
              />
              <button className="bg-white text-purple-600 font-semibold px-4 py-2 ml-2 rounded-md hover:bg-gray-200">
                Subscribe
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div>
            <img
              src="/assets/newsletter.png"
              alt="Newsletter Illustration"
              className="w-[550px] h-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
