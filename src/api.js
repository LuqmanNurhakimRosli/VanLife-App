import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where} from "firebase/firestore";

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
const db = getFirestore(app);  

//Refactoring the fetching function below
const vansCollectionRef = collection(db, "vans");

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

// export async function getHostVan(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     return await res.json()
// }

// A function whose only purpose is to delay execution
// for the specified # of milliseconds when used w/ `await`
// e.g. inside an async function:
// await sleep(2000)  => pauses the function for 2 seconds before moving on

export async function getVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}