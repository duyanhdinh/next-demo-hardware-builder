import { app } from "@fire/app";
import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore";
import {UserInfo} from "@firebase/auth";

const db = getFirestore(app);

export type UserFirebase = UserInfo;

export const storeUser = async (user: UserFirebase) => {
    const usersRef = doc(db, 'users', user.uid);

    const userSnapshot = await getDoc(usersRef);

    if (!userSnapshot.exists()) {
        const { displayName, email, photoURL } = user;
        const createdAt = new Date();

        try {
            await setDoc(usersRef, {
                displayName,
                email,
                avatar: photoURL,
                createdAt,
            });
        } catch (error) {
            console.log('error creating the user', error);
        }
    }
};