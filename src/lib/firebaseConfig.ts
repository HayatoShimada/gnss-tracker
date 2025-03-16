import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  authDomain: "geolocationtest-5f7cc.firebaseapp.com",
  projectId: "geolocationtest-5f7cc",
  storageBucket: "geolocationtest-5f7cc.appspot.com",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
