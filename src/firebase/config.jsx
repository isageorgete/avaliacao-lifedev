import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBorDxo2NUOIPL0ll2pcb_0PpN0u66c8G8",
    authDomain: "lifedev-isadora.firebaseapp.com",
    projectId: "lifedev-isadora",
    storageBucket: "lifedev-isadora.firebasestorage.app",
    messagingSenderId: "418904790053",
    appId: "1:418904790053:web:a51352a35b2e741df2dbcc",
    measurementId: "G-75SX0ZRK13"
  };

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth();

export { db , auth }