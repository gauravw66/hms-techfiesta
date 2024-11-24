import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [phoneNumber, setPhoneNumber] = useState(""); // Default phone number

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 md:px-4">
      <div className="w-full max-w-md md:bg-white md:shadow-md rounded-lg p-6">
        {/* Header Section */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="text-2xl font-bold text-gray-900">➕</div>
          <h1 className="text-xl font-semibold text-gray-900">
            Hospital Signup
          </h1>
        </div>

        {/* Title and Subtitle */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Create Your Account
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Join our hospital community to access personalized healthcare
          services.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="john.doe@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="********"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                +91
              </span>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="w-full pl-12 mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white font-medium text-sm rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 flex items-center">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-sm text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Google Signup Button */}
        <button
          type="button"
          className="w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium text-sm rounded-md shadow-sm flex items-center justify-center space-x-2 hover:bg-gray-50"
        >
          <FcGoogle alt="Google" className="w-5 h-5" />
          <span>Sign up with Google</span>
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 hover:underline">
            Log in here.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
