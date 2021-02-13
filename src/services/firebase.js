import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDBxvcxKSrI0_Bw_B9UZcB60E_jQ0TTxII",
    authDomain: "movie-app-f1488.firebaseapp.com",
    databaseURL: "https://movie-app-f1488.firebaseio.com",
    projectId: "movie-app-f1488",
    storageBucket: "movie-app-f1488.appspot.com",
    messagingSenderId: "742078526866",
    appId: "1:742078526866:web:f9cb4b241e1ffca261bd4b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase