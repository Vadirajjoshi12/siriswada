import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM58V4Dv0D50kCwxTVEN7OJEwwz3uxs0w",
  authDomain: "siriswada-foods.firebaseapp.com",
  projectId: "siriswada-foods",
  storageBucket: "siriswada-foods.firebasestorage.app",
  messagingSenderId: "255159924451",
  appId: "1:255159924451:web:8cc62fe099fb97169ef7d6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);