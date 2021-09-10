import firebase from 'firebase' ;
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDg30sL5nzUo0P_loHG61GCB9GA4RHNpm8",
  authDomain: "p-77-d388d.firebaseapp.com",
  projectId: "p-77-d388d",
  storageBucket: "p-77-d388d.appspot.com",
  messagingSenderId: "906376560121",
  appId: "1:906376560121:web:347a1048709d83ffe0d128",
  measurementId: "G-1P9N794L39"
};

firebase.initializeApp (firebaseConfig) ;
export default firebase.firestore();
