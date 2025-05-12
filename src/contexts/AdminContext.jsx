// UserContext.jsx
import React, { createContext, useState, useContext } from "react";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [userData, setUserData] = useState({});

    const createAdminData = async (username, language, theme) => {
        const admin = auth.currentUser;

        if (!admin) {
            throw new Error("No user is signed in");
        }

        try {
            await setDoc(doc(db, "Users", user.uid), {
                username: username,
                language: language,
                theme: theme,
            });

            const userDoc = await getDoc(doc(db, "Users", user.uid));
            if (userDoc.exists()) {
                const data = userDoc.data();
                setUserData(data);
            }

            console.log("User profile created/updated successfully!");
        } catch (error) {
            console.error("Error creating/updating profile:", error);
            throw error;
        }
    };
    const updateAdminData = async (username, language, theme) => {
        const user = auth.currentUser;

        if (!user) {
            throw new Error("No user is signed in");
        }

        try {
            await updateDoc(doc(db, "Users", user.uid), {
                username: username,
                language: language,
                theme: theme,
            });

            const userDoc = await getDoc(doc(db, "Users", user.uid));
            if (userDoc.exists()) {
                const data = userDoc.data();
                setUserData(data);
            }

            console.log("User profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            throw error;
        }
    };

    const getAdminData = async () => {
        const user = auth.currentUser;

        try {
            if (!user) {
                throw new Error("No user is signed in");
            }

            const userDoc = await getDoc(doc(db, "Users", user.uid));
            if (userDoc.exists()) {
                const data = userDoc.data();
                setUserData(data);
            }

            console.log("User profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            throw error;
        }
    };



    return (
        <UserContext.Provider value={{ userData, setUserData, createUserData, updateUserData, getUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useAdmin = () => useContext(AdminContext);
