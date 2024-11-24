import React from 'react';
import { Link } from 'react-router-dom';
import { MdError } from "react-icons/md";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 p-2">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-sm text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        {/* <img
          src="https://via.placeholder.com/150"
          alt="Page Not Found"
          className="mx-auto mb-6 rounded"
        /> */}
        <MdError alt="Page Not Found"
          className="mx-auto mb-6 rounded text-9xl text-green-600"/>
        <Link
          to="/"
          className="px-4 py-2 bg-green-600 text-white font-medium text-sm rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
