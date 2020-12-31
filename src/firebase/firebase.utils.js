import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDqERDTVPAGQhhQsjpvytyqXgX520KSWyw",
  authDomain: "react-ecomm-ce07c.firebaseapp.com",
  databaseURL: "https://react-ecomm-ce07c.firebaseio.com",
  projectId: "react-ecomm-ce07c",
  storageBucket: "react-ecomm-ce07c.appspot.com",
  messagingSenderId: "854381562413",
  appId: "1:854381562413:web:6bfd5b81d4415edd67c6a4",
  measurementId: "G-L6RK6PJ65G",
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
      console.log("erorr creating user", error.message);
    }
  }
  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
