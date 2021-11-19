import firebase from "firebase/app";
import "firebase/firestore" 

const firebaseConfig = {
    apiKey: "AIzaSyBKhIIuT6374JSHbgwoIJrCDoIlZlZfA_8",
    authDomain: "ecommerce-coderh.firebaseapp.com",
    projectId: "ecommerce-coderh",
    storageBucket: "ecommerce-coderh.appspot.com",
    messagingSenderId: "69105101206",
    appId: "1:69105101206:web:09f00ec9c4065f5ac495b7",
    measurementId: "G-HBKF2XYEP0"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore(app);