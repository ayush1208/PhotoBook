import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDhBM9l1WDKFlf6j0FgtYDwxekj79njwX0",
    authDomain: "photobook-f1964.firebaseapp.com",
    projectId: "photobook-f1964",
    storageBucket: "photobook-f1964.appspot.com",
    messagingSenderId: "94970765380",
    appId: "1:94970765380:web:142f7a0cd14c7557bd5c11"
  };

  // Initialize Firebase
  const base = initializeApp(firebaseConfig);

  const projectStorage = getStorage(base);
  const projectFirestore = getFirestore(base);

  export {projectStorage,projectFirestore};