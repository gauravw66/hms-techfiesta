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
import TempNavbar from './components/TempNavbar';

function App() {
  

  return (
    <Router>
      <TempNavbar />

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
