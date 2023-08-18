 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import {
    getAuth,
    onAuthStateChanged,createUserWithEmailAndPassword
  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  import {
      getFirestore,doc,setDoc,collection,addDoc,updateDoc
  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
  
   // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDKckeGedMbGSj7NpxFk3siDAXkzd-yGU0",
   authDomain: "friend-hackthon.firebaseapp.com",
   projectId: "friend-hackthon",
   storageBucket: "friend-hackthon.appspot.com",
   messagingSenderId: "229955689782",
   appId: "1:229955689782:web:29c41164559f544a626797",
   measurementId: "G-ZST5B4N4VQ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getFirestore(app);

 export {auth,createUserWithEmailAndPassword,db,doc,onAuthStateChanged,setDoc,collection,addDoc,updateDoc}