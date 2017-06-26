import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBhtVo8PSMA22xPkrNzlQelFYaMgH7dS5o",
  authDomain: "chatapp-practice.firebaseapp.com",
  databaseURL: "https://chatapp-practice.firebaseio.com",
  projectId: "chatapp-practice",
  storageBucket: "chatapp-practice.appspot.com",
  messagingSenderId: "276630217040"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
