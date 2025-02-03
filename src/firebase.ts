import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInAnonymously, signOut } from "firebase/auth";

//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAFFocDdL1j5KoZ7yUpClDuAbBT6N53eM8",
    authDomain: "vanlife-7454f.firebaseapp.com",
    projectId: "vanlife-7454f",
    storageBucket: "vanlife-7454f.firebasestorage.app",
    messagingSenderId: "423522587972",
    appId: "1:423522587972:web:0ba43c33f66f21b05c3311",
    measurementId: "G-5FR24MRQJD"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

//Google Authentication
const provider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider)
        const user = result.user
        localStorage.setItem("loggedin", String(true))
        localStorage.setItem("user", JSON.stringify(user))
        return user
    } catch(error) {
        console.log("Google Sign-In Erro:", error)
        throw error
    }
}

export const logout = async () => {
    await signOut(auth)
    localStorage.removeItem("loggedin")
    localStorage.removeItem("user")
}
