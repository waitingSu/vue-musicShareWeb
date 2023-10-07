import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCe3pZnCq6x6CzoqE87J7enJWhh8-up1vI',
  authDomain: 'vue-music-aa851.firebaseapp.com',
  projectId: 'vue-music-aa851',
  storageBucket: 'vue-music-aa851.appspot.com',
  //   messagingSenderId: '963991330725',
  appId: '1:963991330725:web:8cb22ce0e313b17c12124c',
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export { auth, db, usersCollection, songsCollection, commentsCollection, storage };
