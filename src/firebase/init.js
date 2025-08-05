import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCp5O2o4Fk76_gz5t1Wv0-xUwuPLbhMjhA",
  authDomain: "immigrant--health-system.firebaseapp.com",
  projectId: "immigrant--health-system",
  storageBucket: "immigrant--health-system.firebasestorage.app",
  messagingSenderId: "427079476557",
  appId: "1:427079476557:web:44f2e84b831bbe977f0304"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db