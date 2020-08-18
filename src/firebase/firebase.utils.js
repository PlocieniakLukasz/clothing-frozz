import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAbTB8pE5tnzv36ln51HLvqqXm-HX2H48I",
  authDomain: "cloth-store-ce642.firebaseapp.com",
  databaseURL: "https://cloth-store-ce642.firebaseio.com",
  projectId: "cloth-store-ce642",
  storageBucket: "cloth-store-ce642.appspot.com",
  messagingSenderId: "106948240164",
  appId: "1:106948240164:web:83532870113055d10509b1",
  measurementId: "G-G0D9E49Z6H",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
