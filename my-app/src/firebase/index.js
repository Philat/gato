import firebase from 'firebase/app';
import 'firebase/firestore'; // for the db
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyCl6M203vcEBIWfKPssKZJC16xrG4Ookwo",
        authDomain: "gatto-grigio.firebaseapp.com",
        projectId: "gatto-grigio",
        storageBucket: "gatto-grigio.appspot.com",
        messagingSenderId: "661137128539",
        appId: "1:661137128539:web:a53fd0d5a6057e3f3e537e"
}

firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) { return };

        const userRef = firestore.doc(`users/${userAuth.uid}`)
        const snapShot = await userRef.get();

        if (!snapShot.exists) {
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
                        console.log('error creating user', error.message);
                }
        }
        return userRef;
}

export {
        firestore,
        createUserProfileDocument,
        auth,
}