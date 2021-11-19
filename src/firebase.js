import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDD1bTLqYQDuHT3WxPUnIs2IQwquW7QiHg",
  authDomain: "ecommerce-rl4-c4c89.firebaseapp.com",
  projectId: "ecommerce-rl4-c4c89",
  storageBucket: "ecommerce-rl4-c4c89.appspot.com",
  messagingSenderId: "932869797635",
  appId: "1:932869797635:web:339b00fdc232fb7f6bdb36"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth}