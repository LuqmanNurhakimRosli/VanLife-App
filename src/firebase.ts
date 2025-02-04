import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut 
} from "firebase/auth";

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
 * Signs in the user with a Google popup.
 *
 * @returns {Promise<any>} A promise that resolves with the signed-in user.
 */
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Optionally store user info in local storage
    localStorage.setItem("loggedin", "true");
    localStorage.setItem("user", JSON.stringify(user));

    return user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};

/**
 * Logs out the current user.
 *
 * @returns {Promise<void>}
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
