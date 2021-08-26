// import * as firebase from 'firebase/app';
import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDSPo6w8UAbfpqsOuPdjK16WT9jEkkpYCE",
    authDomain: "photogallery-4e943.firebaseapp.com",
    projectId: "photogallery-4e943",
    storageBucket: "photogallery-4e943.appspot.com",
    messagingSenderId: "498458920579",
    appId: "1:498458920579:web:df1bda75973428b211fdb6",
    measurementId: "G-0SXX6S72S0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectFirestore,projectStorage,timestamp};