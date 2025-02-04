// firebase.ts
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFFocDdL1j5KoZ7yUpClDuAbBT6N53eM8",
    authDomain: "vanlife-7454f.firebaseapp.com",
    projectId: "vanlife-7454f",
    storageBucket: "vanlife-7454f.firebasestorage.app",
    messagingSenderId: "423522587972",
    appId: "1:423522587972:web:0ba43c33f66f21b05c3311",
    measurementId: "G-5FR24MRQJD"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Google Authentication Provider
const provider = new GoogleAuthProvider();

/**
 * Sign in with a Google popup.
 */
export const signInWithGoogle = async () => {
  try {
    // This method must be triggered by a user action (e.g., button click)
    const result = await signInWithPopup(auth, provider);
    // Optionally, you can store user data in local storage
    const user = result.user;
    localStorage.setItem("loggedin", "true");
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};

/**
 * Sign in using email and password.
 * (For admin users using native authentication)
 */
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    localStorage.setItem("loggedin", "true");
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    console.error("Email Sign-In Error:", error);
    throw error;
  }
};

/**
 * Sign out the current user.
 */
export const logout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("loggedin");
    localStorage.removeItem("user");
  } catch (error) {
    console.error("Sign out error:", error);
    throw error;
  }
};
