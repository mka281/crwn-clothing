import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDBVenwjO9ipI92sCTlMGLKfQeZfxgzkDc",
  authDomain: "crwn-db-8528c.firebaseapp.com",
  databaseURL: "https://crwn-db-8528c.firebaseio.com",
  projectId: "crwn-db-8528c",
  storageBucket: "crwn-db-8528c.appspot.com",
  messagingSenderId: "927268931991",
  appId: "1:927268931991:web:3410d2841079918b1cdcd2",
  measurementId: "G-NBKCXQRNYR"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(userRef, snapShot);
  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error while creating user", error.message);
    }

    return userRef;
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;