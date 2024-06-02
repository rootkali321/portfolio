
let firebaseConfig = {
    apiKey: "AIzaSyAgExUXch2iQD5rKj6lD8G6AZB4l9yuAUo",
    authDomain: "blog-518c0.firebaseapp.com",
    projectId: "blog-518c0",
    storageBucket: "blog-518c0.appspot.com",
    messagingSenderId: "494390805429",
    appId: "1:494390805429:web:4b63703d3511bd2049cffc",
    measurementId: "G-18B1HFDQP6"
  };


firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  