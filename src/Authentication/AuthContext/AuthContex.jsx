import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/Firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const Auth_Context = createContext(null);
const AuthContex = ({ children }) => {
    const [User, setUser] = useState(null);
    const [loader, setloader] = useState(true);

    const RegisterUser = (email, password) => {
        setloader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            setloader(false);
        }
        )
        return () => {
            unsubscribe();
        }
    }, [])
    const loginUser = (email, password) => {
        setloader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        return signOut(auth);
    }
    const authinfo = {
        User,
        loader,
        RegisterUser,
        logout,
        loginUser,
    }
    return (
        <Auth_Context.Provider value={authinfo}>
            {children}
        </Auth_Context.Provider>
    );
};

export default AuthContex;