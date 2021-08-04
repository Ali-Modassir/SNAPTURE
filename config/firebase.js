const firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyB8AikwGReYg4qIGoEtqINC0kD_AcvuQ80",
  authDomain: "snapture-modassir.firebaseapp.com",
  projectId: "snapture-modassir",
  databaseURL:
    "https://snapture-modassir-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "snapture-modassir.appspot.com",
  messagingSenderId: "552999962778",
  appId: "1:552999962778:web:40cb4474980c97d9bbf723",
  measurementId: "G-042ML5B2BS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

module.exports = firebase.database();
