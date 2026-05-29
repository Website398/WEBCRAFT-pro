import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA7yWZoKJTr3ao2_ftTuslGiUybshSsqPY",
  authDomain: "webcraft-8d9d5.firebaseapp.com",
  databaseURL:
    "https://webcraft-8d9d5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webcraft-8d9d5",
  storageBucket: "webcraft-8d9d5.firebasestorage.app",
  messagingSenderId: "669108868955",
  appId: "1:669108868955:web:c810a62112460fe1fb2c7e",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

















