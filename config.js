import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDUlzharE5jJRD1DGbKkpudjjLJEmdpVVg",
    authDomain: "knowledgeable-42206.firebaseapp.com",
    databaseURL: "https://knowledgeable-42206-default-rtdb.firebaseio.com",
    projectId: "knowledgeable-42206",
    storageBucket: "knowledgeable-42206.appspot.com",
    messagingSenderId: "647575990852",
    appId: "1:647575990852:web:d2d013641e80b86d9cc211"
  };
  
    firebase.initializeApp(firebaseConfig);

export default firebase.database()