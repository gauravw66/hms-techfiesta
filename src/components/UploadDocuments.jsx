import React, { useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const UploadDocuments = () => {
  // Separate state for each document type
  const [imagingFile, setImagingFile] = useState(null);
  const [labFile, setLabFile] = useState(null);
  const [surgeryFile, setSurgeryFile] = useState(null);
  const [medicationFile, setMedicationFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes

  // Handle file change for different document types
  const handleFileChange = (e, setFileFunction) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      // Check if the file is a PDF and its size is within the limit
      if (selectedFile.type !== "application/pdf") {
        setMessage("Only PDF files are allowed.");
        return;
      }

      if (selectedFile.size > MAX_FILE_SIZE) {
        setMessage("File size should not exceed 3MB.");
        return;
      }

      setFileFunction(selectedFile);
      setMessage(""); // Clear any previous messages
    }
  };

  // Handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Handle file drop event
  const handleDrop = (e, setFileFunction) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFile = e.dataTransfer.files[0];

    if (droppedFile) {
      // Check if the dropped file is a PDF and its size is within the limit
      if (droppedFile.type !== "application/pdf") {
        setMessage("Only PDF files are allowed.");
        return;
      }

      if (droppedFile.size > MAX_FILE_SIZE) {
        setMessage("File size should not exceed 3MB.");
        return;
      }

      setFileFunction(droppedFile);
      setMessage(""); // Clear any previous messages
    }
  };

  // Handle file delete for different document types
  const handleDeleteFile = (setFileFunction) => {
    setFileFunction(null); // Reset the file state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if at least one file has been uploaded
    if (!imagingFile && !labFile && !surgeryFile && !medicationFile) {
      setMessage("Please upload at least one document.");
      return;
    }

    setLoading(true);
    setMessage("");

    const formData = new FormData();
    if (imagingFile) formData.append("imaging", imagingFile);
    if (labFile) formData.append("lab", labFile);
    if (surgeryFile) formData.append("surgery", surgeryFile);
    if (medicationFile) formData.append("medication", medicationFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false);
      setMessage("Files uploaded successfully!");
    } catch (error) {
      setLoading(false);
      setMessage("Error uploading files.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center md:px-8 lg:px-16 ">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md border-b border-gray-200">
        <div className="border-b border-gray-200 mb-6">
          <h1 className="pb-4 text-2xl font-semibold text-gray-900 ">
            Upload Documents
          </h1>
        </div>

        {/* Upload Sections */}
        {[
          {
            title: "Imaging Documents",
            file: imagingFile,
            setFileFunction: setImagingFile,
          },
          { title: "Lab Reports", file: labFile, setFileFunction: setLabFile },
          {
            title: "Surgery History",
            file: surgeryFile,
            setFileFunction: setSurgeryFile,
          },
          {
            title: "Medication History",
            file: medicationFile,
            setFileFunction: setMedicationFile,
          },
        ].map((section, index) => (
          <div key={index} className="mb-6">
            <p className="text-sm font-medium text-gray-800 mb-2">
              Upload {section.title}
            </p>
            <div
              className="flex items-center justify-center p-6 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300"
              onClick={() =>
                document.getElementById(`file-input-${index}`).click()
              }
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, section.setFileFunction)}
            >
              <input
                id={`file-input-${index}`}
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, section.setFileFunction)}
                className="hidden"
              />
              {section.file ? (
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600 text-sm">
                    {section.file.name}
                  </span>
                  <button
                    type="button"
                    className="text-red-500 text-sm"
                    onClick={() => handleDeleteFile(section.setFileFunction)}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <>
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
                  <p className="text-gray-500 text-sm mt-2">
                    Drag and drop or click to select a file
                  </p>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full h-12 text-white bg-green-500 hover:bg-green-600 font-medium text-sm rounded-lg mt-6 relative flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <Oval
              visible={true}
              height="20"
              width="20"
              color="#fff"
              ariaLabel="oval-loading"
            />
          ) : (
            "Submit"
          )}
        </button>

        {/* Message after upload */}
        {message && (
          <p
            className={`mt-4 text-sm ${
              message.includes("Error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default UploadDocuments;
