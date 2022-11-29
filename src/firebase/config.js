import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCh2pgjGEV7HswglSKyX9nKmmf-uMTlkeo",
    authDomain: "fir-1c489.firebaseapp.com",
    projectId: "fir-1c489",
    storageBucket: "fir-1c489.appspot.com",
    messagingSenderId: "540982460176",
    appId: "1:540982460176:web:c0ac32c72eae649d586f95",
    measurementId: "G-51GE8LWKCE"
  };

export default firebase.initializeApp(firebaseConfig)