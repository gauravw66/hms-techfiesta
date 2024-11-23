import React, { useState } from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    phoneNumber: '',
    address: '',
    gender: '',
    aadharNumber: '',
    panNumber: '',
    emergencyContact: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 md:py-8 lg:py-12">
      <div className="max-w-6xl mx-auto bg-white min-h-[100vh] md:min-h-0 md:rounded-xl md:shadow-lg">
        {/* Header */}
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Personal Information</h1>
        </div>

        {/* Form */}
        <div className="p-4 md:p-6 lg:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Grid Layout for larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-3 rounded-lg bg-gray-50 text-gray-600 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>

              {/* Date of Birth */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900">Date of Birth</label>
                <input
                  type="date"
                  className="w-full p-3 rounded-lg bg-gray-50 text-gray-600 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900">Phone Number</label>
                <div className="flex">
                  <div className="flex items-center gap-1 bg-gray-50 p-3 rounded-l-lg border border-gray-200">
                    {/* <img src="/api/placeholder/20/15" alt="flag" className="w-5 h-4" /> */}
                    <span className="text-gray-600">+91</span>
                    {/* <ChevronDown className="w-4 h-4 text-gray-600" /> */}
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="flex-1 p-3 rounded-r-lg bg-gray-50 text-gray-600 border border-gray-200 border-l-0 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900">Gender</label>
                <div className="relative">
                  <select
                    className="w-full p-3 rounded-lg bg-gray-50 text-gray-600 appearance-none border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  >
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                </div>
              </div>

              {/* Aadhar Card Number */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900">Aadhar Card Number</label>
                <input
                  type="text"
                  placeholder="Enter your Aadhar Card number"
                  className="w-full p-3 rounded-lg bg-gray-50 text-gray-600 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, aadharNumber: e.target.value})}
                />
              </div>

              {/* PAN Card Number */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900">PAN Card Number</label>
                <input
                  type="text"
                  placeholder="Enter your PAN Card number"
                  className="w-full p-3 rounded-lg bg-gray-50 text-gray-600 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, panNumber: e.target.value})}
                />
              </div>

              {/* Emergency Contact */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900">Emergency Contact Number</label>
                <input
                  type="tel"
                  placeholder="Enter emergency contact number"
                  className="w-full p-3 rounded-lg bg-gray-50 text-gray-600 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                />
              </div>

              {/* Address - Full Width */}
              <div className="space-y-1 md:col-span-2 lg:col-span-3">
                <label className="text-sm font-medium text-gray-900">Address</label>
                <textarea
                  placeholder="Enter your address"
                  rows="3"
                  className="w-full p-3 rounded-lg bg-gray-50 text-gray-600 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
            </div>

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
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;