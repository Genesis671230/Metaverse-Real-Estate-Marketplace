import { getStorage } from "@firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPSkBmN6hX-f3_NUeF_ltoHfCXY63LuZI",
  authDomain: "room-423c7.firebaseapp.com",
  projectId: "room-423c7",
  storageBucket: "room-423c7.appspot.com",
  messagingSenderId: "662251326766",
  appId: "1:662251326766:web:b4e4a658c90aa439677ebf"
};

export const app = initializeApp(firebaseConfig);
export const database = getStorage(app);
export const auth = getAuth(app);
