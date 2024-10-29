import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";



const firebaseConfig = {

    apiKey: "AIzaSyDS_Ej_Tl34b1MRPoMvlYZXWp7XUHRcLyI",
    authDomain: "project-crud-be995.firebaseapp.com",
    projectId: "project-crud-be995",
    storageBucket: "project-crud-be995.appspot.com",
    messagingSenderId: "690736395543",
    appId: "1:690736395543:web:f1e39f730cb8c9be6b3352",
    measurementId: "G-2F3HRY81JT"

};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
