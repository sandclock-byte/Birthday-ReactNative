import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAC6d2ChJ04A77RaEiNlJR8P3Flr9rZsUQ",
    authDomain: "birthday-cabcb.firebaseapp.com",
    databaseURL: "https://birthday-cabcb.firebaseio.com",
    projectId: "birthday-cabcb",
    storageBucket: "birthday-cabcb.appspot.com",
    messagingSenderId: "488521513551",
    appId: "1:488521513551:web:63a3f352bd43cc9ba6883a"
};

export default firebase.initializeApp(firebaseConfig);