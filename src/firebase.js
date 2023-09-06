import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBbXcpn7EqF15gNx8G5cZ3xx5K-vTdkMGU",
  authDomain: "ventas-74658.firebaseapp.com",
  projectId: "ventas-74658",
  storageBucket: "ventas-74658.appspot.com",
  messagingSenderId: "937781492143",
  appId: "1:937781492143:web:97529d5d106a2b83fdd75a",
  measurementId: "G-9HTWSFCEM2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; // Exporta la instancia de Firestore para su uso en otros componentes
