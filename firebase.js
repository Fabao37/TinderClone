// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth, EmailAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_3GmYnfRKxRZCnuYVPcDTM6XJODBAb5U",
  authDomain: "tinder-test-6ccde.firebaseapp.com",
  projectId: "tinder-test-6ccde",
  storageBucket: "tinder-test-6ccde.appspot.com",
  messagingSenderId: "327891854454",
  appId: "1:327891854454:web:95a62d5c6e49137085ab57"
};

// Initialize Firebase
let app, auth;

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (error) {
    console.log("Error initializing app: " + error);
  }
} else {
  app = getApp();
  auth = getAuth(app);
}
const provider = new EmailAuthProvider();
const db = getFirestore();
const timestamp = serverTimestamp();

export { app, auth, provider, db, timestamp };
