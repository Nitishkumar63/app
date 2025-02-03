import { Link } from "react-router";
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-2xl text-gray-600">Page Not Found</p>
      <p className="mt-2 text-gray-500">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
