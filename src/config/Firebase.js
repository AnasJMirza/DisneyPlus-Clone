import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC6BEyiiWTmjc6GTc01n5tS-6mPiEqu4cs",
  authDomain: "disneyplus-clone-f00a7.firebaseapp.com",
  projectId: "disneyplus-clone-f00a7",
  storageBucket: "disneyplus-clone-f00a7.appspot.com",
  messagingSenderId: "719822536263",
  appId: "1:719822536263:web:a7aba444bdfed404fa3b62"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app)
const provider = new GoogleAuthProvider();

export { auth, storage, provider };
export default db;