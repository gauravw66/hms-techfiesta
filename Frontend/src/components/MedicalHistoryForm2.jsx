import React, { useState } from "react";

const MedicalHistoryForm2 = () => {
  const [formData, setFormData] = useState({
    intoxicants: "none",
    smoking: "never",
    drinking: "never",
    others: "none",
  });

  const handleChange = (category, value) => {
    setFormData((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const RadioGroup = ({
    title,
    name,
    options,
    value,
    onChange,
    className = "",
  }) => (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-lg font-bold text-navy-900 mb-4">{title}</h2>
      <div className="space-y-3 md:space-y-0 md:flex md:gap-6 md:items-center">
        {options.map((option) => (
          <label key={option.value} className="flex items-center">
            <div className="relative flex items-center">
              <input
                type="radio"
                className="h-5 w-5 border-2 border-gray-300 rounded-sm checked:bg-green-500 checked:border-transparent focus:ring-0 focus:ring-offset-0"
                checked={value === option.value}
                onChange={() => onChange(name, option.value)}
              />
              <span className="ml-3 text-base text-gray-900">
                {option.label}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 md:p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {/* Header */}
          <div className="p-4 border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">
              Medical History
            </h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-5">
          <RadioGroup
            title="Intoxicants"
            name="intoxicants"
            value={formData.intoxicants}
            onChange={handleChange}
            options={[
              { value: "none", label: "None" },
              { value: "occasionally", label: "Occasionally" },
              { value: "regularly", label: "Regularly" },
            ]}
          />

          <RadioGroup
            title="Smoking"
            name="smoking"
            value={formData.smoking}
            onChange={handleChange}
            options={[
              { value: "never", label: "Never" },
              { value: "former", label: "Former Smoker" },
              { value: "current", label: "Current Smoker" },
            ]}
          />

          <RadioGroup
            title="Drinking"
            name="drinking"
            value={formData.drinking}
            onChange={handleChange}
            options={[
              { value: "never", label: "Never" },
              { value: "social", label: "Social Drinker" },
              { value: "regular", label: "Regular Drinker" },
            ]}
          />

          <RadioGroup
            title="Others"
            name="others"
            value={formData.others}
            onChange={handleChange}
            options={[
              { value: "none", label: "None" },
              { value: "occasionally", label: "Occasionally" },
              { value: "regularly", label: "Regularly" },
            ]}
          />

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
  );
};

export default MedicalHistoryForm2;
