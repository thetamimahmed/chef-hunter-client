// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkl142gp_EFilCa0MQiyNMFwmxFhcnm1s",
  authDomain: "chef-recipe-hunter-clien-59e1d.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-59e1d",
  storageBucket: "chef-recipe-hunter-clien-59e1d.appspot.com",
  messagingSenderId: "602079322354",
  appId: "1:602079322354:web:e05cfe3a1d8b7e9ce6706b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;