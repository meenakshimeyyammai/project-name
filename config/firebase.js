import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBhuFtD1_7bDCVmqjN-V0LskHdBWMzArKM",
    authDomain: "stock-app-b0cae.firebaseapp.com",
    databaseURL: "https://stock-app-b0cae.firebaseio.com",
    projectId: "stock-app-b0cae",
    storageBucket: "stock-app-b0cae.appspot.com",
    messagingSenderId: "421121604524",
    appId: "1:421121604524:web:e5a3552212f16f7f135809",
    measurementId: "G-QSGZF35YTV"
  };

const Firebase = firebase.initializeApp(firebaseConfig);

export default firebase;
