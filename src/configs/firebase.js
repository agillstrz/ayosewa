// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATWgsJIVsB9GBffD6PnoW-uJ_LbyifyWo",
  authDomain: "ayosewa-7e6f6.firebaseapp.com",
  projectId: "ayosewa-7e6f6",
  storageBucket: "ayosewa-7e6f6.appspot.com",
  messagingSenderId: "1094814936108",
  appId: "1:1094814936108:web:237a29073a835ef9c2b589",
  measurementId: "G-33RWWVZ5FD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
