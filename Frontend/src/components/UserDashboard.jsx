import React, { useState } from "react";
import { useAuth } from "../context/authContext"; // Adjust the path as per your directory structure
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Navigate } from "react-router-dom";

const UserDashboard = () => {
  const { currentUser, userLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  // Logout handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Successfully logged out");
      setRedirectToLogin(true); // Trigger the redirect
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  if (redirectToLogin) {
    return <Navigate to="/login" />; // Redirect to the login page
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-8 lg:px-16 py-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-lg font-bold text-gray-800">User Dashboard</h1>

        {/* Hamburger Menu */}
        <div className="relative">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-50">
              <ul className="py-2">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#documents"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Documents
                  </a>
                </li>
                <li>
                  <a
                    href="#settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Profile Section */}
      {userLoggedIn && currentUser ? (
        <>
          <section className="text-center mb-8">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src={currentUser.photoURL || "https://via.placeholder.com/150"}
              alt={currentUser.displayName || "User"}
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {currentUser.displayName || "User Name"}
            </h2>
            <p className="text-sm text-gray-500">{currentUser.email}</p>
          </section>

          {/* Personal Information */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Personal Information
            </h3>
            <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
              {[{ label: "Name", value: currentUser.displayName || "John Doe" },
                { label: "Email", value: currentUser.email },
                { label: "Unique ID", value: currentUser.uid },
              ].map((info, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b last:border-b-0 pb-3 last:pb-0"
                >
                  <span className="text-gray-500 font-medium">
                    {info.label}
                  </span>
                  <span className="text-gray-800 font-semibold">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <p className="text-center text-gray-600">Please log in to view details.</p>
      )}
    </div>
  );
};

export default UserDashboard;
