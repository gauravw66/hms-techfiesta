import React, { useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { motion, AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadDocuments = () => {
  const [files, setFiles] = useState({
    imaging: [],
    lab: [],
    surgery: [],
    medication: [],
  });
  const [loading, setLoading] = useState(false);

  const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
  const MAX_FILES_PER_SECTION = 5;

  const showErrorToast = (message) => {
    console.error(message);
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const showSuccessToast = (message) => {
    console.log(message);
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const handleFileChange = (e, section) => {
    const selectedFiles = Array.from(e.target.files);
    const existingFiles = files[section];

    if (existingFiles.length + selectedFiles.length > MAX_FILES_PER_SECTION) {
      const errorMessage = `You can upload up to ${MAX_FILES_PER_SECTION} files per section.`;
      showErrorToast(errorMessage);
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

    setFiles((prev) => ({
      ...prev,
      [section]: [...prev[section], ...validFiles],
    }));
  };

  const handleDeleteFile = (section, index) => {
    setFiles((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
    showSuccessToast("File removed successfully.");
  };

  const uploadToPinata = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        headers: {
          pinata_api_key: import.meta.env.VITE_PINATA_API_KEY,
          pinata_secret_api_key: import.meta.env.VITE_PINATA_SECRET_API_KEY,
          "Content-Type": "multipart/form-data",
        },
      });
      return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
    } catch (error) {
      throw new Error("Error uploading to Pinata: " + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const hasFiles = Object.values(files).some((section) => section.length > 0);
    if (!hasFiles) {
      const errorMessage = "Please upload at least one document.";
      showErrorToast(errorMessage);
      return;
    }
  
    setLoading(true);
  
    try {
      const uploadedLinks = {};
  
      for (const [section, sectionFiles] of Object.entries(files)) {
        uploadedLinks[section] = []; // Initialize an empty array for each section
  
        for (const file of sectionFiles) {
          const uploadedLink = await uploadToPinata(file); // Upload file to Pinata
          uploadedLinks[section].push(uploadedLink); // Add uploaded file link to the section
        }
      }
  
      console.log("Uploaded Files JSON:", JSON.stringify(uploadedLinks, null, 2)); // Log JSON object of links
      showSuccessToast("All files uploaded successfully to Pinata!");
  
      setFiles({ imaging: [], lab: [], surgery: [], medication: [] }); // Reset files
    } catch (error) {
      showErrorToast(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  const sections = [
    { title: "Imaging Documents", key: "imaging" },
    { title: "Lab Reports", key: "lab" },
    { title: "Surgery History", key: "surgery" },
    { title: "Medication History", key: "medication" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <ToastContainer />
      <motion.div
        className="max-w-xl w-full bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">Upload Documents</h1>

        {sections.map((section) => (
          <motion.div
            key={section.key}
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="font-medium text-gray-700">{section.title}</p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mt-2 transition hover:bg-gray-100 cursor-pointer">
              <input
                type="file"
                accept=".pdf"
                multiple
                onChange={(e) => handleFileChange(e, section.key)}
                className="hidden"
                id={`file-input-${section.key}`}
              />
              <label
                htmlFor={`file-input-${section.key}`}
                className="text-sm text-gray-500 cursor-pointer"
              >
                Drag and drop files or click to upload (Max {MAX_FILES_PER_SECTION})
              </label>
              <AnimatePresence>
                <div className="mt-2 space-y-2">
                  {files[section.key].map((file, index) => (
                    <motion.div
                      key={file.name}
                      className="flex items-center justify-between text-sm bg-gray-100 p-2 rounded-lg"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                    >
                      <span>{file.name}</span>
                      <button
                        type="button"
                        onClick={() => handleDeleteFile(section.key, index)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            </div>
          </motion.div>
        ))}

        <motion.button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full py-2 rounded-lg font-medium text-white transition ${
            loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
          }`}
          whileHover={{ scale: !loading ? 1.05 : 1 }}
          whileTap={{ scale: !loading ? 0.95 : 1 }}
        >
          {loading ? <Oval height={20} width={20} color="#fff" /> : "Submit"}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default UploadDocuments;
