// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyD7UUtrwBRhL6icd1Oe01rXqNu6HAqoRNA',
    authDomain: 'fir-5f25e.firebaseapp.com',
    projectId: 'fir-5f25e',
    storageBucket: 'fir-5f25e.appspot.com',
    messagingSenderId: '194034273970',
    appId: '1:194034273970:web:30f9e57008d26e417b03ab',
    measurementId: 'G-Z5LNXN05PC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
