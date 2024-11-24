import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import PersonalInfoForm from './components/PersonalInfoForm';
import MedicalHistoryForm from './components/MedicalHistoryForm';
import MedicalHistoryForm2 from './components/MedicalHistoryForm2';
import UploadDocuments from './components/UploadDocuments';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      {/* Main Navbar */}
      <nav className="bg-gray-800 p-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">Dev_nav_bar(del after developmet)</div>
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          <div className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
            <Link
              to="/"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Signup
            </Link>
            <Link
              to="/personal-info"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Personal Info
            </Link>
            <Link
              to="/medical-history"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Medical History
            </Link>
            <Link
              to="/medical-history-2"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Medical History 2
            </Link>
            <Link
              to="/upload-documents"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Upload Documents
            </Link>
            <Link
              to="/user-dashboard"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              User Dashboard
            </Link>
            <Link
              to="/admin-dashboard"
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/personal-info" element={<PersonalInfoForm />} />
        <Route path="/medical-history" element={<MedicalHistoryForm />} />
        <Route path="/medical-history-2" element={<MedicalHistoryForm2 />} />
        <Route path="/upload-documents" element={<UploadDocuments />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
