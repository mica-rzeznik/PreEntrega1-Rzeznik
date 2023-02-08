import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDeJ2Oz01XsnHyLnHraRHu1J27OOins5uE",
    authDomain: "honeydukes-24ca6.firebaseapp.com",
    projectId: "honeydukes-24ca6",
    storageBucket: "honeydukes-24ca6.appspot.com",
    messagingSenderId: "1069741701917",
    appId: "1:1069741701917:web:026419b3cf9be768dfbff4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)