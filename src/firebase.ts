import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";



const firebaseConfig = {

    apiKey: "AIzaSyCYzE4JPa3LGK64HC1l3lQV6OzMHZ1tFXQ",
    authDomain: "testeaaateste.firebaseapp.com",
    projectId: "testeaaateste",
    storageBucket: "testeaaateste.appspot.com",
    messagingSenderId: "959615903063",
    appId: "1:959615903063:web:22eaa0766ed7e1a1848a12"

};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
