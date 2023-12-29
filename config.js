import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyC3Hs9eM6J9Z6oyvMkfXOz54qsgbhFIPMc",

  authDomain: "proj71-3c082.firebaseapp.com",

  projectId: "proj71-3c082",

  storageBucket: "proj71-3c082.appspot.com",

  messagingSenderId: "71676624621",

  appId: "1:71676624621:web:59ad00089a4d20ab9f56e4"

  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
