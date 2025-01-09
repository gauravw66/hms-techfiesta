import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TempNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-gray-800 p-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">Dev_nav_bar</div>
          {/* Hamburger Menu Button */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            ☰
          </button>
          {/* Navigation Links */}
          <div
            className={`md:flex md:space-x-4 ${
              isOpen ? 'block' : 'hidden'
            } md:block`}
          >
            <ul className="space-y-2 md:space-y-0 md:flex">
              <li>
                <Link
                  to="/login"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  to="/personal-info"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Personal Info
                </Link>
              </li>
              <li>
                <Link
                  to="/medical-history"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Medical History
                </Link>
              </li>
              <li>
                <Link
                  to="/medical-history-2"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Medical History 2
                </Link>
              </li>
              <li>
                <Link
                  to="/upload-documents"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Upload Documents
                </Link>
              </li>
              <li>
                <Link
                  to="/user-dashboard"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  User Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/admin-dashboard"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TempNavbar;
