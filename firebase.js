import { initializeApp } from 'firebase/app';
import { firebase } from '@firebase/app';
import 'firebase/firestore';

// const firebaseConfig = {
// 	apiKey: process.env.API_KEY,
// 	authDomain: process.env.AUTH_DOMAIN,
// 	projectId: process.env.PROJECT_ID,
// 	storageBucket: process.env.STORAGE_BUCKET,
// 	messagingSenderId: process.env.MESSAGE_SENDER_ID,
// 	appId: process.env.APP_ID,
// };

const firebaseConfig = {
	apiKey: 'AIzaSyB0nFduuc1EX3JQ9YAZaameZ1vJdVAjqb8',
	authDomain: 'whatsapp-cdbdf.firebaseapp.com',
	projectId: 'whatsapp-cdbdf',
	storageBucket: 'whatsapp-cdbdf.appspot.com',
	messagingSenderId: '456023172894',
	appId: '1:456023172894:web:d79874d98ebc04535dcb0f',
};

// Initialize Firebase
const app = !firebase.app.length
	? initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
