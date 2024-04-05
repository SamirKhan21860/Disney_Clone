import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2ahsn7rcrY97xhjNl3tl21DkDW12ii90",
  authDomain: "disneyplus-clone-f1b31.firebaseapp.com",
  projectId: "disneyplus-clone-f1b31",
  storageBucket: "disneyplus-clone-f1b31.appspot.com",
  messagingSenderId: "185167346573",
  appId: "1:185167346573:web:95373ed91e669707ec5bc4",
  measurementId: "G-Q6RXYHRD1V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
