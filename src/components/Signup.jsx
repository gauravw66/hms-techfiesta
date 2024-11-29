import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from "../firebase/auth"; // Import your functions

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState(""); // Default email
  const [password, setPassword] = useState(""); // Default password
  const [phoneNumber, setPhoneNumber] = useState(""); // Default phone number
  const [loading, setLoading] = useState(false); // To handle loading state during sign up
  const [error, setError] = useState(""); // To store error messages
  const navigate = useNavigate();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // Handle email, password, and phone signup
  const handleNormalSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors
    try {
      // Here you would create the user using email, password, and store the phone number in your database
      await doCreateUserWithEmailAndPassword(email, password); // Use the utility function to create user with email and password

      // After user is created, you can store the phone number in your database (e.g., Firestore)
      console.log("User signed up successfully with email and password!");
      console.log("Phone number:", phoneNumber); // Store phone number in Firestore or database

      // Navigate to dashboard
      navigate("/user-dashboard");
    } catch (error) {
      console.error("Error during signup:", error.message);
      setError(error.message); // Display error to user
    } finally {
      setLoading(false);
    }
  };

  // Handle Google sign-up
  const handleGoogleSignup = async () => {
    try {
      await doSignInWithGoogle(); // Use the utility function
      console.log("User signed up with Google!");
      navigate("/user-dashboard"); // Redirect to dashboard or wherever you want
    } catch (error) {
      console.error("Error during Google sign-up:", error.message);
      setError(error.message); // Display error to user
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 md:px-4">
      <div className="w-full max-w-md md:bg-white md:shadow-md rounded-lg p-6">
        {/* Header Section */}
        <div className="flex items-center space-x-2 mb-6">
          <img src="/logo.png" alt="logo" className="w-32 flex mx-auto" />
        </div>

        {/* Title and Subtitle */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h2>
        <p className="text-sm text-gray-500 mb-6">
          Join our hospital community to access personalized healthcare services.
        </p>

        {/* Display Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Form */}
        <form onSubmit={handleNormalSignup} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="john.doe@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">+91</span>
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
            disabled={loading}
            className="w-full px-4 py-2 bg-green-600 text-white font-medium text-sm rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {loading ? "Signing Up..." : "Sign Up"}
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
          onClick={handleGoogleSignup}
          className="w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium text-sm rounded-md shadow-sm flex items-center justify-center space-x-2 hover:bg-gray-50"
        >
          <FcGoogle alt="Google" className="w-5 h-5" />
          <span>Sign up with Google</span>
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/" className="text-green-600 hover:underline">
            Log in here.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
