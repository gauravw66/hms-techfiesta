import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-4 md:p-8 lg:p-10  bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between mb-6 flex-wrap md:flex-nowrap">
  <h1 className="text-3xl font-bold text-gray-800 tracking-tight w-full md:w-auto mb-4 md:mb-0">
    Admin Dashboard
  </h1>
  <div className="flex items-center space-x-4 w-full md:w-auto">
    <input
      type="text"
      placeholder="Search patients by ID"
      className="border rounded-lg p-2 w-full md:w-64 focus:ring focus:ring-blue-200 transition duration-200 ease-in-out"
    />
    <button className="hover:bg-blue-600 focus:outline-none rounded-lg p-2 transition duration-200 ease-in-out">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-500 hover:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  </div>
</header>


      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: "Patients", value: "1.2K" },
          { label: "New", value: "45" },
          { label: "Today", value: "30" },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300 ease-in-out"
          >
            <p className="text-2xl font-bold text-gray-800">{card.value}</p>
            <p className="text-gray-500">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Patient Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Patient Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg text-left">
            <thead className="bg-gray-100">
              <tr>
                {["Patient ID", "Name", "Age", "Gender"].map((heading, index) => (
                  <th key={index} className="p-4 text-gray-600 font-medium">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { id: "PO01", name: "John", age: 45, gender: "Male" },
                { id: "PO02", name: "Emily", age: 30, gender: "Female" },
                { id: "PO03", name: "Michael", age: 50, gender: "Male" },
                { id: "PO04", name: "Sophia", age: 25, gender: "Female" },
              ].map((patient, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-blue-50 transition duration-200 ease-in-out`}
                >
                  <td className="p-4">{patient.id}</td>
                  <td className="p-4">{patient.name}</td>
                  <td className="p-4">{patient.age}</td>
                  <td className="p-4">{patient.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Patient Summary */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Appointments Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Appointments Over Time
          </h3>
          <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
            [Appointments Chart Placeholder]
          </div>
        </div>

        {/* Gender Distribution Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Gender Distribution
          </h3>
          <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
            [Pie Chart Placeholder]
          </div>
        </div>

        {/* Top Diagnoses */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Top Diagnoses
          </h3>
          <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
            [Bar Chart Placeholder]
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Recent Activities
        </h2>
        <ul className="space-y-4">
          {[
            { text: "New Patient", details: "John Smith registered" },
            { text: "Update Info", details: "Emily Davis updated contact info" },
          ].map((activity, index) => (
            <li key={index} className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{activity.text}</p>
                <p className="text-sm text-gray-500">{activity.details}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-12">
        &copy; 2023 Healthcare Admin Dashboard
      </footer>
    </div>
  );
};

export default AdminDashboard;
