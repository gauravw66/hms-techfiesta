import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
import { useAuth } from "../context/authContext";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { userLoggedIn } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        navigate("/personal-info");
      } catch (error) {
        setError(error.message);
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
        navigate("/personal-info");
      } catch (error) {
        setError(error.message);
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 md:px-4 md:p-2">
      {userLoggedIn && <Navigate to="/personal-info" replace={true} />}
      <div className="w-full max-w-md md:bg-white md:shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Welcome Back!
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Login to your account
        </p>

        <div className="text-center mb-6">
          <img src="/logo.png" alt="logo" className="w-32 flex mx-auto" />
        </div>

        {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}

        <form className="space-y-4" onSubmit={onSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <button
            type="submit"
            disabled={isSigningIn}
            className={`w-full px-4 py-2 ${
              isSigningIn
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-500"
            } text-white font-medium text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
          >
            {isSigningIn ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="my-4 flex items-center">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-sm text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button
          type="button"
          onClick={onGoogleSignIn}
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
