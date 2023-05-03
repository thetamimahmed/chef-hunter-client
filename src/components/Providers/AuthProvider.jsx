import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
     const auth = getAuth(app)

     //create user Account
     const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
     }

     //signIn user account
     const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
     }

     //update user profile
     

     //get user
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser=>{
            setUser(currentUser)
        }))

        return () =>{
            unsubscribe()
        }
     }, [])


     const authInfo = {
        user,
        createUser,
        logInUser,
     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;