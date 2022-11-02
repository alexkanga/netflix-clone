import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDWXkARrw3CEofVjfjv9qLHS6WYvZhwhEw",

	authDomain: "netflix-clone-3709a.firebaseapp.com",

	projectId: "netflix-clone-3709a",

	storageBucket: "netflix-clone-3709a.appspot.com",

	messagingSenderId: "1064016091823",

	appId: "1:1064016091823:web:0c5fcc299bad155f11525a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { auth };
export default db;
