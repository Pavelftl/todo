import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyBSHrxIaxN2dDXNxjnqyUdM8VUVgxkDAak',
	authDomain: 'todoproject-3ff29.firebaseapp.com',
	projectId: 'todoproject-3ff29',
	storageBucket: 'todoproject-3ff29.appspot.com',
	messagingSenderId: '978002605139',
	appId: '1:978002605139:web:9ab2fc9273d91ec7cac2a6',
	databaseURL:
		'https://todoproject-3ff29-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
