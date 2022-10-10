import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwnDmVjxb4hIMnehu23QwjpdGxax6ryJU",
  authDomain: "boardtopgames-db.firebaseapp.com",
  projectId: "boardtopgames-db",
  storageBucket: "boardtopgames-db.appspot.com",
  messagingSenderId: "433148399428",
  appId: "1:433148399428:web:80d976e46e463cc0425111",
};

let app;
export let auth;

if (!app) {
  app = initializeApp(firebaseConfig);
  if (!auth) {
    auth = getAuth(app);
  }
}

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
