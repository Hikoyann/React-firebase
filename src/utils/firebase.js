// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDs22CyIizANY7GcyCZQq6-Oy3u4Eu56Z0",
//   authDomain: "blog-2-99562.firebaseapp.com",
//   projectId: "blog-2-99562",
//   storageBucket: "blog-2-99562.appspot.com",
//   messagingSenderId: "127417707652",
//   appId: "1:127417707652:web:9f19fb35b2984bb86b66d1",
//   measurementId: "G-F0FQSRMGY4",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCuEhJxvTFaXMVrrR7pmAdsLc5y0KlPMlM",
  authDomain: "blog-56b8c.firebaseapp.com",
  projectId: "blog-56b8c",
  storageBucket: "blog-56b8c.appspot.com",
  messagingSenderId: "39530946321",
  appId: "1:39530946321:web:0ee2e84c21d30c70eb76b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
