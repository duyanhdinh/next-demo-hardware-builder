// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {firebaseConfig} from "@fire/config";
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
export const app = initializeApp(firebaseConfig, 'app');