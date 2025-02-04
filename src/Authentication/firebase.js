import { initializeApp  } from "firebase/app";

import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";

import { getFirestore ,collection, getDocs, orderBy, query} from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCgcvF5jl0GagEdYpu0sfnzgNqc9_XaElM",
   authDomain: "sign-login-page-e7d3d.firebaseapp.com",
   projectId: "sign-login-page-e7d3d",
   storageBucket: "sign-login-page-e7d3d.firebasestorage.app",
   messagingSenderId: "165107396009",
   appId: "1:165107396009:web:cdcad1aba724a08defa8b8",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

 
 
export{
    auth,getAuth,createUserWithEmailAndPassword,
    signInWithEmailAndPassword ,db,collection, getDocs, orderBy, query
}