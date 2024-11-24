import React, { useState } from "react";
import { IoIosDocument } from "react-icons/io";

const UserDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
                  <a
                    href="#logout"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Profile Section */}
      <section className="text-center mb-8">
        <img
          className="w-24 h-24 rounded-full mx-auto mb-4"
          src="https://via.placeholder.com/150"
          alt="User"
        />
        <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>
        <p className="text-sm text-gray-500">@johndoe</p>
      </section>

      {/* Personal Information */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Personal Information
        </h3>
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          {[ 
            { label: "Name", value: "John Doe" },
            { label: "Age", value: "34" },
            { label: "Sex", value: "Male" },
            { label: "Unique ID", value: "ID-123456" },
            { label: "Email", value: "john.doe@example.com" },
            { label: "Phone Number", value: "+91 1234567890" },
            { label: "Address", value: "123 Main Street" },
          ].map((info, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b last:border-b-0 pb-3 last:pb-0"
            >
              <span className="text-gray-500 font-medium">{info.label}</span>
              <span className="text-gray-800 font-semibold">{info.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Uploaded Documents */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Uploaded Documents
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Blood Pressure Report", date: "2023-01-15" },
            { title: "Diabetes Report", date: "2023-02-10" },
            { title: "Lab Report", date: "2023-03-20" },
          ].map((doc, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2h10z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{doc.title}</p>
                <p className="text-sm text-gray-500">Upload Date: {doc.date}</p>
              </div>
              {/* <button className="ml-auto bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md p-2">
              <IoIosDocument />
              </button> */}
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
