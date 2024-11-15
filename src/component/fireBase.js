import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBiOaNm9nFUT0Dm28zh8Wj71KMHHj57ae4",
    authDomain: "chatapp-57965.firebaseapp.com",
    projectId: "chatapp-57965",
    storageBucket: "chatapp-57965.appspot.com",
    messagingSenderId: "537680293069",
    appId: "1:537680293069:web:8c5df72d0005db8f17cd84",
    measurementId: "G-SG5HT0BV1Y"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const storage = getStorage();

export const db = getFirestore(app);
