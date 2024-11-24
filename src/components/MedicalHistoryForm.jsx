import React, { useState } from 'react';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const conditions = [
  { id: 'diabetes', label: 'Diabetes' },
  { id: 'asthma', label: 'Asthma' },
  { id: 'spectacles', label: 'Spectacles' },
  { id: 'dental', label: 'Dental Treatment' },
  { id: 'allergies', label: 'Allergies' },
];

const MedicalHistoryForm = () => {
  const [formData, setFormData] = useState({
    bloodGroup: '',
    height: '',
    weight: '',
    conditions: [],
  });

  const handleConditionChange = (condition) => {
    setFormData(prev => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter(c => c !== condition)
        : [...prev.conditions, condition]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50  md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Medical History</h1>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Blood Group */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-900">Blood Group</label>
                <select 
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.bloodGroup}
                  onChange={(e) => setFormData(prev => ({ ...prev, bloodGroup: e.target.value }))}
                >
                  <option value="">Select blood group</option>
                  {bloodGroups.map(group => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>

              {/* Height */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-900">Height (in cm)</label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="170"
                    value={formData.height}
                    onChange={(e) => setFormData(prev => ({ ...prev, height: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="absolute right-3 md:right-8 top-2 text-sm text-gray-500">cm</span>
                </div>
              </div>

              {/* Weight */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-900">Weight (in kg)</label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="65"
                    value={formData.weight}
                    onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="absolute right-3 md:right-8 top-2 text-sm text-gray-500">kg</span>
                </div>
              </div>
            </div>

            {/* Medical Conditions Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Medical Conditions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {conditions.map(({ id, label }) => (
                  <div key={id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={id}
                      checked={formData.conditions.includes(id)}
                      onChange={() => handleConditionChange(id)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={id} className="text-sm font-medium text-gray-700">
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                className="flex-1 p-3 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 p-3 rounded-lg text-white bg-green-500 hover:bg-green-600 transition-colors"
              >
                Save
              </button>
            </div>
            </div>

            <p className="text-sm text-gray-600 text-center mt-4">
              Please ensure all information is accurate and up to date for proper medical care.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistoryForm;