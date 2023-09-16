import firebase from "firebase/compat/app";
import "firebase/firestore";
import { collection, addDoc, updateDoc, setDoc,doc } from "firebase/firestore";
import { auth, db } from "./fireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerUser = async (name, email, password) => {
  createUserWithEmailAndPassword(auth, email, password).then(
    async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
       
try {
   setDoc(doc(db, "Users", user.uid), {
    name,
    email,
    userID:user.uid
  });
} catch (e) {
  console.error("Error adding document: ", e);
}
    }
  );
};

export const AddData = async (inputdata) => {
  await updateDoc(doc(db, "Users", auth.currentUser.uid), inputdata);
};
