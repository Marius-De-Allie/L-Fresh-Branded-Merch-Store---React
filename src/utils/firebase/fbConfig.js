 import firebase from 'firebase/app';
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDh-fE9HHZ2GSlu3wzlpyPST8256ze1saU",
    authDomain: "expensify-69aaa.firebaseapp.com",
    databaseURL: "https://expensify-69aaa.firebaseio.com",
    projectId: "expensify-69aaa",
    storageBucket: "expensify-69aaa.appspot.com",
    messagingSenderId: "547336199571",
    appId: "1:547336199571:web:1b14a7bb40f93eeccfdc66",
    measurementId: "G-FW7NJJ1W11"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
