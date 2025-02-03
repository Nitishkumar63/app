function Fashion() {
  return (
    <div className="absolute  z-[500000] w-[200px] bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-500">
      <ul className="py-2">
        <li className="px-4 py-2 hover:bg-gray-200 text-sm font-medium cursor-pointer">
          Men
        </li>
        <li className="px-4 py-2 hover:bg-gray-200 text-sm  font-medium  cursor-pointer">
          Women
        </li>
        <li className="px-4 py-2 hover:bg-gray-200 text-sm font-medium  cursor-pointer">
          Accessories
        </li>
        <li className="px-4 py-2 hover:bg-gray-200 text-sm font-medium  cursor-pointer">
          Kits
        </li>
        <li className="px-4 py-2 hover:bg-gray-200 text-sm font-medium  cursor-pointer">
          Shirt
        </li>
        <li className="px-4 py-2 hover:bg-gray-200 text-sm font-medium  cursor-pointer">
          Boys
        </li>
      </ul>
    </div>
  );
}

export default Fashion;
