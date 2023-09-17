import firebase from "firebase/compat/app";
import "firebase/firestore";
import {
  collection,
  addDoc,
  updateDoc,
  setDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";
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
          userID: user.uid,
          communities: [],
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  );
};

export const AddData = async (inputdata) => {
  console.log(inputdata);
  await updateDoc(doc(db, "Users", auth.currentUser.uid), inputdata);
};

export const addCommunity = async (communityKey) => {
  try {
    communitiesraw = await getDoc(doc(db, "Users", auth.currentUser.uid));
    communities = await communitiesraw.data().communities;
    console.log(communities);
    await updateDoc(doc(db, "Users", auth.currentUser.uid), {
      communities: [...communities, communityKey],
    }).then(() => {
      alert("Community Added");
    });
  } catch (e) {
    console.log(e);
  }
};

export async function getCommunites() {
  try {
    communitiesraw = await getDoc(doc(db, "Users", auth.currentUser.uid));
    communities = await communitiesraw.data().communities;
    return communities;
  } catch (e) {
    console.log(e);
  }
}

export const getCommunityData = async (communityKey) => {
  try {
    const q = query(
      collection(db, "Users"),
      where("communities", "array-contains", communityKey),
      orderBy("CarbonFootprint", "asc")
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getdbuser = () => {
  console.log("wait a minnnn");
  const docRef = doc(db, "Users", auth.currentUser.uid);
  return getDoc(docRef)
    .then(async(doc) => {
      if (doc.exists()) {
        console.log("Document data:", doc.data());
        return await doc.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return null;
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
};
