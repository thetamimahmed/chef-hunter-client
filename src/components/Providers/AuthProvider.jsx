import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
     const auth = getAuth(app)
     const googleProvider = new GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();

     //create user Account
     const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }

     //signIn user account
     const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }

     //sign out user account
     const logOutUser  = () =>{
        setLoading(true)
        return signOut(auth)
     }

     //google Log in
     const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
     }

     //github Log in
     const githubLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
     }

     //get user
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser=>{
            setUser(currentUser)
            setLoading(false)
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
        githubLogIn,
        loading
     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;