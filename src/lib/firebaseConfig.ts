import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "geolocationtest-5f7cc.firebaseapp.com",
  projectId: "geolocationtest-5f7cc",
  storageBucket: "geolocationtest-5f7cc.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
