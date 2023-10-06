import {app} from "@fire/app";
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User} from "firebase/auth";

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    'login_hint': 'user@example.com'
});

export type ObserverSignInCallback = (user: User) => void
export type ObserverSignOutCallback = () => void

export const observerAuth = (signInCallback: ObserverSignInCallback, signOutCallback: ObserverSignOutCallback) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            signInCallback(user);
        } else {
            signOutCallback();
        }
    });
};

export const signInGoogle = () => signInWithPopup(auth, googleProvider);

export const isAuthApp = (): boolean => !!auth.currentUser;

export const signOutApp = () => signOut(auth);