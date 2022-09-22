import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCqbDV1SEJF4HuvprbPI3zQ_Ox9n8uGS9U',
  authDomain: 'restaurantapp-db508.firebaseapp.com',
  databaseURL: 'https://restaurantapp-db508-default-rtdb.firebaseio.com',
  projectId: 'restaurantapp-db508',
  storageBucket: 'restaurantapp-db508.appspot.com',
  messagingSenderId: '11278483651',
  appId: '1:11278483651:web:b4b0acff91385f6df6a276',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
