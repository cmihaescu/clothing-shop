import { initializeApp } from "firebase/app";
import {
    getAuth,    
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAdnKrFQhhf6DqLm1NmIYg6LxEdU2eaXC4",
  authDomain: "crwn-clothing-db-b7f60.firebaseapp.com",
  projectId: "crwn-clothing-db-b7f60",
  storageBucket: "crwn-clothing-db-b7f60.appspot.com",
  messagingSenderId: "1082532613013",
  appId: "1:1082532613013:web:6e2c2b63c2223376bb049c"
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error){
            console.log('error creating the user', error.message)
        }

    }
     else {return userDocRef};
}

    export const createAuthUserWithEmailAndPassword = async (email, password) => {
        if(!email || !password) return;
        return await createUserWithEmailAndPassword(auth, email, password)
     }