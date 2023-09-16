import firebase from "firebase/compat/app";

import "firebase/firestore";

import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "./fireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerUser = async (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        try {
            const docref = await addDoc(collection(db, "Users"), {
              name,
              email,
            });
            console.log("Document written with ID: ", docref.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        // ...
    }).catch(()=>{
        alert("Error creating user");
    })
    
};
