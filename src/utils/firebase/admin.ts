import { getApps, initializeApp } from 'firebase-admin/app';
import {getAuth} from "firebase-admin/auth";
import {firebaseConfig} from "@fire/config";

const alreadyCreatedAps = getApps();

// Initialize Firebase
export const appAdmin = alreadyCreatedAps.length === 0 ? initializeApp(firebaseConfig, 'admin') : alreadyCreatedAps[0];

export const adminAuth = getAuth(appAdmin);

export const verifyUser = async (token: string) => {
    try {
        await adminAuth.verifyIdToken(token);

        return true;
    } catch (error) {
        return false;
    }
};