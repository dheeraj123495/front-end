import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrmwpiagg0Yo__x7ncyoNq5e7VXlbznBU",
  authDomain: "react-practice-1316d.firebaseapp.com",
  projectId: "react-practice-1316d",
  databaseURL: "https://react-practice-1316d-default-rtdb.firebaseio.com/",
  storageBucket: "react-practice-1316d.appspot.com",
  messagingSenderId: "593029813390",
  appId: "1:593029813390:web:d71fa1bb307e09a04665df"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
