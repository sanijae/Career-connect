// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX5Vg1s_9gSwBBT-wqWiV59DMc2FiQKT8",
  authDomain: "careerconnect-541d3.firebaseapp.com",
  projectId: "careerconnect-541d3",
  storageBucket: "careerconnect-541d3.appspot.com",
  messagingSenderId: "332812745468",
  appId: "1:332812745468:web:788eb8916616fc356fb579",
  measurementId: "G-P70Z1JL9KG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export { auth, db,storage };