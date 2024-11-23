import React from "react";

const UploadDocuments = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center md:px-8 lg:px-16 ">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md border-b border-gray-200">
        <div className="border-b border-gray-200 mb-5">
          <h1 className="pb-5 text-2xl font-bold text-gray-900 ">
            Personal Information
          </h1>
        </div>

        {/* Stepper */}
        {/* <div className="flex items-center justify-between mb-8">
          <div className="flex-1 flex items-center">
            <div className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full">
              ✓
            </div>
            <p className="ml-2 text-sm text-green-500 font-medium">Imaging</p>
          </div>
          <div className="flex-1 flex items-center">
            <div className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
              2
            </div>
            <p className="ml-2 text-sm text-gray-600 font-medium">Lab</p>
          </div>
          <div className="flex-1 flex items-center">
            <div className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
              3
            </div>
            <p className="ml-2 text-sm text-gray-600 font-medium">Surgery</p>
          </div>
          <div className="flex-1 flex items-center">
            <div className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
              4
            </div>
            <p className="ml-2 text-sm text-gray-600 font-medium">Medication</p>
          </div>
        </div> */}

        {/* Upload Sections */}
        {[
          "Imaging Documents",
          "Lab Reports",
          "Surgery History",
          "Medication History",
        ].map((title, index) => (
          <div key={index} className="mb-6">
            <p className="text-sm font-medium text-gray-800 mb-2">
              Upload {title}
            </p>
            <div className="flex items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4v8z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 10l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>
          </div>
        ))}

        {/* Submit Button */}
        <button className="w-full py-3 text-white bg-green-500 hover:bg-green-600 font-medium text-sm rounded-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default UploadDocuments;
