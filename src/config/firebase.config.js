// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAi9lRxCDlGAOyqqrUQV7MpmEpEPLTlOsM",
  authDomain: "portfolio-sai-kumar.firebaseapp.com",
  projectId: "portfolio-sai-kumar",
  storageBucket: "portfolio-sai-kumar.appspot.com",
  messagingSenderId: "42330527790",
  appId: "1:42330527790:web:a9c85409d6290b910967bf",
  measurementId: "G-159LFSYP8G",
};
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
