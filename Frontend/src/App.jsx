import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/Signup";
import PersonalInfoForm from "./components/PersonalInfoForm";
import MedicalHistoryForm from "./components/MedicalHistoryForm";
import MedicalHistoryForm2 from "./components/MedicalHistoryForm2";
import UploadDocuments from "./components/UploadDocuments";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import TempNavbar from "./components/TempNavbar";
import ProtectedRoute from "./components/ProtectedRoute";
import HospitalAdmin from "./components/HospitalAdmin";


function App() {
  return (
    <Router>
      <TempNavbar />

      {/* Main Content */}
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/hospital-admin" element={<HospitalAdmin />} />
          <Route path="/personal-info" element={<PersonalInfoForm />} />
          <Route path="/medical-history" element={<MedicalHistoryForm />} />
          <Route path="/medical-history-2" element={<MedicalHistoryForm2 />} />
          <Route path="/upload-documents" element={<UploadDocuments />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
