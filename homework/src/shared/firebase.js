import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5_NQ9FK7MYU8v-wFgIGqR-2jm-fdGfqs",
  authDomain: "image-community-97d2a.firebaseapp.com",
  projectId: "image-community-97d2a",
  storageBucket: "image-community-97d2a.appspot.com",
  messagingSenderId: "105499521694",
  appId: "1:105499521694:web:45b4b210144a54b3c0018f",
  measurementId: "G-VSH33T6NLB",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
