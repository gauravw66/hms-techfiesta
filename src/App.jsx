import { useState } from 'react'
import './App.css'
import Login from './components/login'
import Signup from './components/signup'
import PersonalInfoForm from './components/PersonalInfoForm'
import MedicalHistoryForm from './components/MedicalHistoryForm'
import MedicalHistoryForm2 from './components/MedicalHistoryForm2'
import UploadDocuments from './components/UploadDocuments'
import UserDashboard from './components/UserDashboard'
import AdminDashboard from './components/AdminDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login></Login>
    <Signup></Signup>
    <PersonalInfoForm></PersonalInfoForm>
    <MedicalHistoryForm></MedicalHistoryForm>
    <MedicalHistoryForm2></MedicalHistoryForm2>
    <UploadDocuments></UploadDocuments>
    <UserDashboard></UserDashboard>
    <AdminDashboard></AdminDashboard>
    </>
  )
}

export default App
