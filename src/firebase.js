import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRf_KjKvjWA_X5dzLHz3oS0Pgp3ZRLgCE",
  authDomain: "groocery-fe620.firebaseapp.com",
  projectId: "groocery-fe620",
  storageBucket: "groocery-fe620.appspot.com",
  messagingSenderId: "103898067412",
  appId: "1:103898067412:web:f86c381df9de7b48216641",
  measurementId: "G-YEGE1BXFXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);