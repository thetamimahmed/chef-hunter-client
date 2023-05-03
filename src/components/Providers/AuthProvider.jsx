import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
     const auth = getAuth(app)
     const googleProvider = new GoogleAuthProvider();

     //create user Account
     const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
     }

     //signIn user account
     const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
     }

     //sign out user account
     const logOutUser  = () =>{
        return signOut(auth)
     }

     //google Log in
     const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider)
     }

     //get user
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser=>{
            setUser(currentUser)
            console.log(currentUser)
        }))

        return () =>{
            unsubscribe()
        }
     }, [])


     const authInfo = {
        user,
        createUser,
        logInUser,
        logOutUser,
        googleLogIn,
     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;