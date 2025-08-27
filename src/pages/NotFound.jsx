import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
      
      {/* Netflix-Style Avatar */}
      <div className="w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center bg-gray-800 rounded-full mb-8 relative">
        <span className="text-6xl sm:text-8xl font-bold text-red-600">?</span>
      </div>

      {/* Text */}
      <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">404</h1>
      <p className="text-gray-400 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
}
