// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkjkOs1gsxP87Lyh_9GssmJLj3wKTrZx8",
  authDomain: "webapp-5e12e.firebaseapp.com",
  projectId: "webapp-5e12e",
  storageBucket: "webapp-5e12e.firebasestorage.app",
  messagingSenderId: "49767087033",
  appId: "1:49767087033:web:6d10077007fcc178451468"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exporta o auth para ser usado nos outros arquivos
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
