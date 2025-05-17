import React, { createContext, useState, useContext } from "react";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import {signInWithEmailAndPassword, updatePassword } from "firebase/auth";

const ChangePasswordContext = createContext();


export const ChangePasswordProvider = ({ children }) => {
    const [userData, setUserData] = useState({});
    const signIn = async (email, password) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    };


    const ChangePassword = async (password, newPassword) => {
        const admin = auth.currentUser;
        if (!admin) {
            throw new Error("No user is signed in");
        }
        const email = admin.email
        try {
            await signIn(email, password);
            console.log("Login successful");
            console.log("User email:");
            console.log(auth.currentUser);

        } catch (err) {
            console.error("Login error:", err.message);
        }
        updatePassword(admin, newPassword).then(() => {
            console.log("Password update successful");
        }).catch((error) => {
            console.log("Password update failed");

        });

    };



    return (
        <UserContext.Provider value={{ ChangePassword }}>
            {children}
        </UserContext.Provider>
    );
};

export const useChangePassword = () => useContext(ChangePasswordContext);
