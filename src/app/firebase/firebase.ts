
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAw25gKs_Vr6mmiudLVOTg-NF_vu4d5830",
  authDomain: "wesync-eda01.firebaseapp.com",
  projectId: "wesync-eda01",
  storageBucket: "wesync-eda01.appspot.com",
  messagingSenderId: "406769522217",
  appId: "1:406769522217:web:c25cf06d0163903b1b2e38"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)