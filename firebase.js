// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9blHZzMw8hU8fTUBBdQv6i0f2Z4NVS1M",
    authDomain: "gaposa-79176.firebaseapp.com",
    projectId: "gaposa-79176",
    storageBucket: "gaposa-79176.appspot.com",
    messagingSenderId: "1033083698105",
    appId: "1:1033083698105:web:6ffb59f3b31ebae66d5468"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;





