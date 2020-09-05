import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBFK7UCGrQ9DJH-Y-P7mgI1Qr7OragEN70",
    authDomain: "tiktok-clone-98e7c.firebaseapp.com",
    databaseURL: "https://tiktok-clone-98e7c.firebaseio.com",
    projectId: "tiktok-clone-98e7c",
    storageBucket: "tiktok-clone-98e7c.appspot.com",
    messagingSenderId: "481589466724",
    appId: "1:481589466724:web:18c3f75febefd7b4d8f171",
    measurementId: "G-7N8ZHRKVF2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;