import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCDCWVueQSh3K-fkThXGF7lBCUAacB_9hw",
  authDomain: "assignment-35460.firebaseapp.com",
  projectId: "assignment-35460",
  storageBucket: "assignment-35460.firebasestorage.app",
  messagingSenderId: "484598747430",
  appId: "1:484598747430:web:ff563c2ea94c335c8ef1e7",
  measurementId: "G-MYDLRBPRSX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;