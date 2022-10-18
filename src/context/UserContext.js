import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
export const AuthContext = createContext();

const auth = getAuth(app);
const UserContext = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({ })
    const [loading,setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("curretnt user,", currentUser);
            setLoading(false)
        })

        return () => { unsubscribe() }
    }, [])
    const authInfo = { user, createUser, signInUser, logOut, googleSignIn,loading }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;