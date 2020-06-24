import "firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCklhTKche98DX43R4PRqrogC8yapFeKms",
    authDomain: "vuex-library.firebaseapp.com",
    databaseURL: "https://vuex-library.firebaseio.com",
    projectId: "vuex-library",
    storageBucket: "vuex-library.appspot.com",
    messagingSenderId: "736361157451",
    appId: "1:736361157451:web:460a134566f9d7d0e5cece",
    measurementId: "G-JKJCNC7BMR"
  };
  class Firebase {
    constructor() {
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      this.auth = firebase.auth();
      this.db = firebase.database();
      this.storage = firebase.storage().ref();
    }
  }
  export default Firebase;
  