import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import PersonalInfoForm from './components/PersonalInfoForm';
import MedicalHistoryForm from './components/MedicalHistoryForm';
import MedicalHistoryForm2 from './components/MedicalHistoryForm2';
import UploadDocuments from './components/UploadDocuments';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/personal-info" element={<PersonalInfoForm />} />
        <Route path="/medical-history" element={<MedicalHistoryForm />} />
        <Route path="/medical-history-2" element={<MedicalHistoryForm2 />} />
        <Route path="/upload-documents" element={<UploadDocuments />} />
        <Route path="/" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
