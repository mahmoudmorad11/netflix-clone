import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCqXl26a5FlWADRgI4hM-FarT5kOEsAU3I",
  authDomain: "netflix-clone-fb78d.firebaseapp.com",
  projectId: "netflix-clone-fb78d",
  storageBucket: "netflix-clone-fb78d.appspot.com",
  messagingSenderId: "771027065342",
  appId: "1:771027065342:web:7d9d64ce2b9a48fd9288af",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      name,
      email,
      password,
      uid: user.uid,
      authProvider: "local",
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const signout = () => {
  signOut(auth);
};

export { auth, db, signup, login, signout };
