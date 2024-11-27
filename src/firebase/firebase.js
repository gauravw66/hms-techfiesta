import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC2x54gS2um96lPLvPkHU1iVLcd_u5ZXk",
  authDomain: "jgmsa-997c0.firebaseapp.com",
  projectId: "jgmsa-997c0",
  storageBucket: "jgmsa-997c0.firebasestorage.app",
  messagingSenderId: "328888180252",
  appId: "1:328888180252:web:818e9c16737a921f3289d9",
  measurementId: "G-GVRLWDMNFL"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };