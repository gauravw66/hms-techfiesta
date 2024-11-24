import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 md:px-4 md:p-2">
      <div className="w-full max-w-md md:bg-white md:shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Welcome Back!
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Login to your account
        </p>

        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Company Logo</h3>
          <p className="text-sm text-gray-500">Centered Company Logo</p>
        </div>

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
              placeholder="Enter your email"
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
                placeholder="Enter your password"
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

          <div className="flex items-center justify-between">
            <a
              href="/signup"
              className="text-sm text-green-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          {/* 
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember Me
            </label>
          </div> */}

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white font-medium text-sm rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>

        <div className="my-4 flex items-center">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-sm text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button
          type="button"
          className="w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium text-sm rounded-md shadow-sm flex items-center justify-center space-x-2 hover:bg-gray-50"
        >
          <FcGoogle alt="Google" className="w-5 h-5" />

          <span>Login with Google</span>
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-green-600 hover:underline">
            Sign Up
          </a>
        </p>

        <div className="mt-4 text-center text-sm text-gray-500">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
