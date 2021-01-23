import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBqBLZLHG2VzbjWyaz-MZ6WKkLNkfx_hL8",
	authDomain: "clone-e991e.firebaseapp.com",
	projectId: "clone-e991e",
	storageBucket: "clone-e991e.appspot.com",
	messagingSenderId: "751328622509",
	appId: "1:751328622509:web:467115cc6abd1a441f5324",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
