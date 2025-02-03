const Footer = () => {
  return (
    <footer className="bg-gray-100">
      {/* Newsletter Section */}

      {/* Info Bar */}
      <div className="bg-white py-8 flex justify-center items-center gap-10 text-gray-600 border-b-2 border-gray-200">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🍏</span>
          <p className="text-lg">Everyday fresh products</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🚚</span>
          <p className="text-lg">Free delivery for order over $70</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🔥</span>
          <p className="text-lg">Daily Mega Discounts</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">💰</span>
          <p className="text-lg">Best price on the market</p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-gray-100  py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-5 gap-8">
          <div className="text-gray-800">
            <h3 className="text-lg font-bold mb-3">FRUIT & VEGETABLES</h3>
            <ul className="space-y-2">
              <li>Fresh Vegetables</li>
              <li>Herbs & Seasonings</li>
              <li>Fresh Fruits</li>
              <li>Cuts & Sprouts</li>
              <li>Exotic Fruits & Veggies</li>
              <li>Packaged Produce</li>
              <li>Party Trays</li>
            </ul>
          </div>
          <div className="text-gray-800">
            <h3 className="text-lg font-bold mb-3">BREAKFAST & DAIRY</h3>
            <ul className="space-y-2">
              <li>Fresh Vegetables</li>
              <li>Herbs & Seasonings</li>
              <li>Fresh Fruits</li>
              <li>Cuts & Sprouts</li>
              <li>Exotic Fruits & Veggies</li>
              <li>Packaged Produce</li>
              <li>Party Trays</li>
            </ul>
          </div>
          <div className="text-gray-800">
            <h3 className="text-lg font-bold mb-3">MEAT & SEAFOOD</h3>
            <ul className="space-y-2">
              <li>Fresh Vegetables</li>
              <li>Herbs & Seasonings</li>
              <li>Fresh Fruits</li>
              <li>Cuts & Sprouts</li>
              <li>Exotic Fruits & Veggies</li>
              <li>Packaged Produce</li>
              <li>Party Trays</li>
            </ul>
          </div>
          <div className="text-gray-800">
            <h3 className="text-lg font-bold mb-3">BEVERAGES</h3>
            <ul className="space-y-2">
              <li>Fresh Vegetables</li>
              <li>Herbs & Seasonings</li>
              <li>Fresh Fruits</li>
              <li>Cuts & Sprouts</li>
              <li>Exotic Fruits & Veggies</li>
              <li>Packaged Produce</li>
              <li>Party Trays</li>
            </ul>
          </div>
          <div className="text-gray-800">
            <h3 className="text-lg font-bold mb-3">BREADS & BAKERY</h3>
            <ul className="space-y-2">
              <li>Fresh Vegetables</li>
              <li>Herbs & Seasonings</li>
              <li>Fresh Fruits</li>
              <li>Cuts & Sprouts</li>
              <li>Exotic Fruits & Veggies</li>
              <li>Packaged Produce</li>
              <li>Party Trays</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200 py-6 text-center text-gray-600">
        <p>Copyright 2024. All rights reserved</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            className="text-gray-500 hover:text-gray-800"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-500 hover:text-gray-800"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-500 hover:text-gray-800"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
