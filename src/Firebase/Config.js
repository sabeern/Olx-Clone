import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage';

const firebaseConfig = {

    apiKey: "AIzaSyDWkmcPISOvqvlv3fGjZWZcCDvCoIp0O8s",
  
    authDomain: "fir-2492f.firebaseapp.com",
  
    projectId: "fir-2492f",
  
    storageBucket: "fir-2492f.appspot.com",
  
    messagingSenderId: "291101963380",
  
    appId: "1:291101963380:web:599dfeed5c21591e144d21",
  
    measurementId: "G-GKZSPJHESB"
  
  };

  export default firebase.initializeApp(firebaseConfig);