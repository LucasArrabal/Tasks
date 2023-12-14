import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCezMqHcd2OjleewhIpoutyG2boMnq96cs",
  authDomain: "task-f179e.firebaseapp.com",
  projectId: "task-f179e",
  storageBucket: "task-f179e.appspot.com",
  messagingSenderId: "653526509836",
  appId: "1:653526509836:web:ded8a42d731c40348b8129"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore()
  export default database