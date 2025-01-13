import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";

const HospitalAdminDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [files, setFiles] = useState({
    imaging: [],
    lab: [],
    surgery: [],
    medication: [],
    doctorsNote: [],
    diagnosis: [],
  });
  const [loading, setLoading] = useState(false);

  const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
  const MAX_FILES_PER_SECTION = 5;

  const sections = [
    { title: "Imaging Report", key: "imaging" },
    { title: "Lab Report", key: "lab" },
    { title: "Surgery Report", key: "surgery" },
    { title: "Medication Report", key: "medication" },
    { title: "Doctor's Note", key: "doctorsNote" },
    { title: "Diagnosis", key: "diagnosis" },
  ];

  const showErrorToast = (message) => toast.error(message, { position: "top-center", autoClose: 3000 });
  const showSuccessToast = (message) => toast.success(message, { position: "top-center", autoClose: 3000 });

  const handleFileChange = (e, section) => {
    const selectedFiles = Array.from(e.target.files);
    if (files[section].length + selectedFiles.length > MAX_FILES_PER_SECTION) {
      showErrorToast(`You can upload up to ${MAX_FILES_PER_SECTION} files per section.`);
      return;
    }

    const validFiles = selectedFiles.filter((file) => {
      if (file.type !== "application/pdf") {
        showErrorToast("Only PDF files are allowed.");
        return false;
      }
      if (file.size > MAX_FILE_SIZE) {
        showErrorToast("File size should not exceed 3MB.");
        return false;
      }
      return true;
    });

    setFiles((prev) => ({ ...prev, [section]: [...prev[section], ...validFiles] }));
  };

  const handleDeleteFile = (section, index) => {
    setFiles((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
    showSuccessToast("File removed successfully.");
  };

  const handleLogout = () => {
    setRedirectToLogin(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!patientId.trim()) {
      showErrorToast("Please enter a valid Patient ID.");
      return;
    }

    const hasFiles = Object.values(files).some((section) => section.length > 0);
    if (!hasFiles) {
      showErrorToast("Please upload at least one document.");
      return;
    }

    setLoading(true);

    try {
      // Mocking upload process
      console.log("Uploading documents for Patient ID:", patientId);
      console.log("Uploaded Files:", files);
      showSuccessToast("Documents uploaded successfully!");
      setFiles({ imaging: [], lab: [], surgery: [], medication: [], doctorsNote: [], diagnosis: [] });
    } catch (error) {
      showErrorToast("Error uploading documents.");
    } finally {
      setLoading(false);
    }
  };

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-8 lg:px-16 py-6">
      <ToastContainer />
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-lg font-bold text-gray-800">Hospital Admin Dashboard</h1>
        <div className="relative">
          <button className="text-gray-600 hover:text-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-50">
              <ul className="py-2">
                <li>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Patient Information</h3>
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div className="flex items-center">
            <span className="text-gray-500 font-medium mr-4">Patient ID:</span>
            <input
              type="text"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              placeholder="Enter Patient ID"
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Upload Documents</h3>
        {sections.map((section) => (
          <motion.div key={section.key} className="mb-6">
            <p className="font-medium text-gray-700">{section.title}</p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mt-2">
              <input
                type="file"
                accept=".pdf"
                multiple
                onChange={(e) => handleFileChange(e, section.key)}
                className="hidden"
                id={`file-input-${section.key}`}
              />
              <label htmlFor={`file-input-${section.key}`} className="text-sm text-gray-500 cursor-pointer">
                Drag and drop files or click to upload (Max {MAX_FILES_PER_SECTION})
              </label>
              <AnimatePresence>
                <div className="mt-2 space-y-2">
                  {files[section.key].map((file, index) => (
                    <motion.div key={file.name} className="flex items-center justify-between text-sm bg-gray-100 p-2 rounded-lg">
                      <span>{file.name}</span>
                      <button type="button" onClick={() => handleDeleteFile(section.key, index)} className="text-red-600 hover:underline">
                        Delete
                      </button>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </section>

      <motion.button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full py-2 rounded-lg font-medium text-white transition ${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? <Oval height={20} width={20} color="#fff" /> : "Submit"}
      </motion.button>
    </div>
  );
};

export default HospitalAdminDashboard;
